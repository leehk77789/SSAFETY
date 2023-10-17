# SSAFETY
### 교통 법규 위반 감지 자율 주행 버스 프로젝트

<img src="./docs/logo.png"/>   

<br><br><br><br>

## 프로젝트 개요
교통 법규 위반 신고는 3년간 3배 증가하였으나 기존 신고 방식은 복잡하고 다소 번거롭다는 문제가 있습니다.
<br>
SSAFETY는 교통 법규 위반 감지 자율 주행 버스로, 위반 감지 시 자동으로 영상을 저장하고 관제 사이트로 신고하여 신고 방식을 개선하였습니다.
<br><br><br><br>

## 프로젝트 소개
- Morai 시뮬레이터를 기반으로 하는 자율 주행 버스가 AI 기반 영상 분석을 통해 교통 법규 위반 차량을 감지합니다.
- 위반 영상을 관련 정보와 함께 관제 시스템에 자동으로 등록합니다.
- 등록된 신고 데이터는 날짜, 지역, 위반 종류 등으로 필터링하여 확인할 수 있습니다.
- 통계 파트에서는 지역별, 시간별, 종류별 위반 통계를 확인할 수 있습니다.
- 자율 주행 버스의 현재 위치를 확인할 수 있으며 경로를 지정할 수 있습니다.
<br><br><br><br>

## 개발 기간
2023.08.21 ~ 2023.10.06(7주)
<br><br><br><br>

## 팀 소개

### 팀 아우토반
- 이충혁(팀장/AD/Planning): Lidar 클러스터링, global path planning, 상암 hd맵 반영
- 김민재(AD/Perception & Control): Pure Pursuit, PID제어, ACC(Adaptive Cruise Control), Lattice planning 등의 자율 주행 제어, 카메라 센서 처리
- 김현명(AD/Perception): morai simulator 환경에서 gps/imu/차량 정보 데이터 이용하여 pub-sub 등록, 차량 정보 데이터 firebase - cloud store간 송수신 연동
- 정유준(WEB): Spring Jpa specification을 이용한 조건별 검색 구현, React D3를 이용한 실제 지형과 같은 지도 구현(GPS 연동 가능), React와 Spring을 이용한 리스트 페이지네이션 구현, Firebase에서 자율주행과 연동된 좌표를 기반으로 실시간 웹에 Pin을 통한 현재 차량 위치 및 속도 동기화, Nivo를 이용한 통계 차트와그래프 구현
- 김용균(AI/INFRA): Resnet 기반 교통 위반 감지 AI 모델 학습 및 적용, CI/CD 인프라 구축 및 관리
<br><br><br><br>

## 기술스택
<img src="https://img.shields.io/badge/java-007396?style=for-the-badge&logo=java&logoColor=white"> <img src="https://img.shields.io/badge/springboot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white"> <img src="https://img.shields.io/badge/springdatajpa-6DB33F?style=for-the-badge&logo=springboot&logoColor=white"> <img src="https://img.shields.io/badge/mysql-4479A1?style=for-the-badge&logo=mysql&logoColor=white">
<br>
<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> <img src="https://img.shields.io/badge/html-E34F26?style=for-the-badge&logo=html5&logoColor=white"> <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white">
<br>
<img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=Python&logoColor=white"> <img src="https://img.shields.io/badge/ROS-22314E?style=for-the-badge&logo=ROS&logoColor=white"> <img src="https://img.shields.io/badge/pytorch-EE4C2C?style=for-the-badge&logo=pytorch&logoColor=white">
<br>
<img src="https://img.shields.io/badge/docker-2496ED?style=for-the-badge&logo=docker&logoColor=white">
<img src="https://img.shields.io/badge/jenkins-D24939?style=for-the-badge&logo=jenkins&logoColor=white">
<img src="https://img.shields.io/badge/nginx-009639?style=for-the-badge&logo=nginx&logoColor=white">
<img src="https://img.shields.io/badge/gitlab-FC6D26?style=for-the-badge&logo=gitlab&logoColor=white">
<img src="https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=Firebase&logoColor=white">
<br><br><br><br>

## 개발환경

- BackEnd       
  - Java : 11.0.19 <br>
  - JVM : 18.9 <br>
  - SERVER : AWS EC2 Ubuntu 20.04.3 LTS <br>

- Front     
  - VS Code : 1.80.2 <br>
  - Node.js : 18.17.1 <br>
  - D3 : 7.6.1 <br>
  - WebPack : 5.74.0 <br>

- DB        
  - MySQL : 8.1 <br>
  - StmCubeIDE : 1.13.1 <br>
  - Firebase Cloud Firestore <br>

- AD        
  - Simulator : MORAI SIM ver22.R2.1
  - Python : 3.8.10     
    - scikit-learn : 1.3.1
    - scipy : 1.10.1
  - Linux os : Ubuntu 20.04.6 LTS      
  - ROS : noetic        
  - NVDIA Driver : 470.199.02       
  - CUDA Version: 11.4      

- AI        
  - cudatoolkit : 11.0      
  - cudnn : 8       
  - mmcv-full : 1.3.9       
  - mmdet : 2.18.1      
  - pandas : 1.3.4      
  - scikit-learn : 1.0.1        
  - tensorboard : 2.7.0     
  - torch : 1.7.0+cu110     

<br><br><br><br>

## 배포 주소
https://j9a102.p.ssafy.io
<br><br><br><br>

## 웹 - 자율주행 환경간 데이터 송수신

### 프로토콜 규격 및 정보

`car` / `car1, car2, car3` / `gps_x, gps_y, vel_x, vel_y` <br>

`car`: 자율주행 정보 colleciton <br>
`car1, car2, car3`: 자율주행 버스 종류 documentation <br>
`gps_x, gps_y, vel_x, vel_y`: 자율주행 버스 정보(차량위치, 속도) field <br>

환경: Firebase Cloud firestore (NoSql)<br><br>

<br><br><br><br>

### 1. 교통 위반 감지

<img src="./docs/images/image.gif"/>   

1초에 약 3번씩 교통 법규 위반을 감지합니다.<br>
위반이 발생하지 않았을 경우에는 위반 사항이 감지되지 않았다는 메시지가 출력됩니다.<br>
위반 사항이 감지되었을 경우에는 편집한 영상과 함께 신고 내역을 신고 페이지에 등록합니다.

<br><br>

### 2. Web

#### 2-1. 메인 페이지
![메인페이지](https://github.com/leehk77789/SSAFETY/assets/96775737/30aa2554-2064-4b20-ac8a-c1f4fc87040b)

<img src="./docs/images/image2.png"/>   

교통 관제를 모토로 한 웹 페이지에서 통계 결과를 시각화해서 볼 수 있습니다.<br>
서울 지역으로 집계된 통계 내용을 한 눈에 지역별, 시간대별, 종류별로 볼 수 있습니다.

<br><br>

#### 2-2. 교통 위반 데이터베이스

<img src="./docs/images/image3.png"/>   

신고된 내역들을 한번에 확인할 수 있으며 지역과 위반 종류로 필터링이 가능합니다.

<br><br>

#### 2-3. 교통 위반사항 상세보기
<img src="./docs/images/image4.png"/>   

신고된 영상과 함께 지역, 위반 종류, 위반 일시와 같이 위반 사항의 상세 정보를 확인할 수 있습니다.

<br><br>

#### 2-4. 자율주행 버스 관제, 통제

<img src="./docs/images/image5.png"/>   

현재 주행 중인 버스의 위치와 속도를 실시간으로 확인할 수 있으며 경로를 지정할 수 있습니다.
<br><br>

### 3. Autonomous driving

#### 3-1. 아키텍처
<img src="./docs/images/image6.png"/>   

lidar, gps, imu 데이터와 hd맵 정보를 입력받아 global, local, lattice path를 planning하여 total control 노드에서 최종 제어가 됩니다.

<br><br>

#### 3-2. 인지 - 카메라
<img src="./docs/images/image7.png"/>   

차량이 바라보는 시점 중심으로 이미지를 자르는 ROI 기법을 적용합니다. 그리고 위에서 바라보는 시선인 BEV로 전환합니다. 이것을 다시 HSV 영역대로 전환하여 차선을 이진화합니다. 여기에 RANSAC(Random Sample Consensus) 기법을 적용시킵니다. 적용된 정보를 바탕으로 차선 곡률을 예측해서 주행에 활용합니다.

<br><br>

#### 3-3. 인지 - 라이다
<img src="./docs/images/image8.png"/>   

장애물을 탐지하기 위해 3D LiDAR를 사용해서 x, y, z, 반사세기(intensity)의 point cloud를 입력 받을 수 있습니다.
해당 포인트와의 거리와 각도를 구하고 
인접한 포인트를 같은 물체로 판단하고 거리를 구합니다.
이를 DBSCAN 방식으로 클러스터링 하였습니다. 

<br><br>

#### 3-4. 판단 - 충돌 회피
<img src="./docs/images/image9.gif"/>   


센서를 통해 받은 데이터로 충돌 회피를 진행합니다. 여기서 lattice path plan 이라는 격자 회피 주행을 실시합니다. 전방에 물체가 보이면 가능한 3차 곡선 경로를 탐색하여 가장 높은 우선 순위 경로로 주행하게 됩니다.

<br><br>

#### 3-5. 판단 - 교통 신호
<img src="./docs/images/image10.gif"/>   

교통 신호는 현재 경로를 파악해 hd맵에서 가져온 데이터를 활용하여 가까운 정지선을 확인합니다. 해당 경로의 신호등 색깔에 따라 주행 여부를 판단합니다. 

<br><br>

#### 3-6. 제어 - Pure Pursuit, PID, ACC
<img src="./docs/images/image11.gif"/>   

조향각을 제어할 수 있도록 pure pursuit 알고리즘을 적용하고, 타겟 속도 제어를 위한 PID 제어, 특정 거리에 대한 속도 제어 ACC를 최종 제어에 반영하였습니다.

<br><br>
