import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import { feature } from 'topojson-client';
import korea from '../mapData/korea-topo.json';
import '../css/Home.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from "sweetalert2";

const featureData = feature(korea, korea.objects['korea-topo']);

const KoreaMap = () => {
  const chart = useRef(null);
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  const printD3 = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    const projection = d3.geoMercator().scale(1).translate([0, 0]);
    const path = d3.geoPath().projection(projection);
    const bounds = path.bounds(featureData);

    const dx = bounds[1][0] - bounds[0][0];
    const dy = bounds[1][1] - bounds[0][1];
    const x = (bounds[0][0] + bounds[1][0]) / 2;
    const y = (bounds[0][1] + bounds[1][1]) / 2;
    const scale = 0.9 / Math.max(dx / width, dy / height);
    const translate = [width / 2 - scale * x - 350, height / 2 - scale * y];

    projection.scale(scale).translate(translate);

    const svg = d3.select(chart.current).append('svg').attr('width', width).attr('height', height);

    const mapLayer = svg.append('g');

    mapLayer
      .selectAll('path')
      .data(featureData.features)
      .enter()
      .append('path')
      .attr('d', path)
      .style('fill', 'skyblue')
      .style('transition', 'transform 0.2s');

    const popupGroup = svg.append('g').style('display', 'none');

    mapLayer
      .selectAll('path')
      .on('mouseover', function (event, d) {
        d3.select(this).style('fill', 'blue').attr('transform', 'translate(0, -5)');

        popupGroup.style('display', 'block');
        popupGroup.selectAll('*').remove();

        popupGroup
          .append('circle')
          .attr('cx', path.centroid(d)[0])
          .attr('cy', path.centroid(d)[1] - 30)
          .attr('r', 30)
          .style('fill', 'white')
          .style('stroke', 'blue')
          .style('stroke-width', 2);

        // 팝업 텍스트
        popupGroup
          .append('text')
          .attr('x', path.centroid(d)[0]) 
          .attr('y', path.centroid(d)[1] - 30)
          .attr('text-anchor', 'middle')
          .attr('alignment-baseline', 'middle')
          .text(d.properties.CTP_KOR_NM)
          .style('fill', 'black') 
          .style('font-size', '12px');
      })
      .on('mouseout', function (event, d) {
        d3.select(this).style('fill', 'skyblue').attr('transform', 'translate(0, 0)');

        popupGroup.style('display', 'none');
      })
      .on('click', function (event, d) {
        if (d.properties.CTP_KOR_NM === '서울특별시') {
          navigate('detailsi');
        } else {
          Swal.fire('아직 지원하지 않는 구역입니다!');
        }
      });
  };

  useEffect(() => {
    printD3();
  }, []);

  useEffect(() => {
    if (data.length === 0) {
      axios.get('http://localhost:8080/getAll')
        .then((response) => {
          setData(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [data]);

  const formatCreationTime = (creationTime) => {
    // creationTime을 문자열로 변환하여 앞에 0을 붙입니다.
    const timeString = String(creationTime).padStart(14, '0');
    const time = timeString.split(",")
    // 연도, 월, 일, 시, 분, 초 부분 추출
    const year = time[0];
    const month = time[1];
    const day = time[2];
    const hour = time[3];
    const minute = time[4];
  
    // 변환된 문자열 생성
    const formattedTime = `${year}년 ${month}월 ${day}일 ${hour}시 ${minute}분`;
  
    return formattedTime;
  };

  return (
    <div className="korea-map-container">
      <div className="korea-map" ref={chart}></div>
      <div className="table-container">
        <table className="rwd-table">
          <thead>
            <tr>
              <th>위반 장소</th>
              <th>위반 종류</th>
              <th>일시</th>
              <th>차량 번호</th>
            </tr>
          </thead>
          <tbody id="table-body">
            {data.map((item, index) => {
              const timeDifference = calculateTimeDifference(item.creationTime);
              const isWithin24Hours = timeDifference < 24;
              const isWithin72Hours = timeDifference < 168;
              let rowClass = '';
              if (isWithin24Hours) {
                rowClass = 'highlighted-row';
              } else if (!isWithin72Hours) {
                rowClass = 'hidden-row';
              }

              return (
                <tr key={index} className={rowClass}>
                  <td data-th="address">{item.city} {item.depth3}</td>
                  <td data-th="violation">{item.aiResult}</td>
                  <td data-th="time">{formatCreationTime(item.creationTime)}</td>
                  <td data-th="carnum">{item.vehicleNumber}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

function calculateTimeDifference(creationTime) {
  const currentTime = new Date();
  const creationTimestamp = new Date(creationTime[0], creationTime[1] - 1, creationTime[2], creationTime[3], creationTime[4], creationTime[5]);
  const timeDifference = (currentTime - creationTimestamp) / (1000 * 60 * 60);
  return timeDifference;
}

export default KoreaMap;