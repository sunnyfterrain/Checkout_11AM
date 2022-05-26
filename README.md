# Checkout 11AM
- 퇴실시간이 11시인 제주도의 고급 숙박 예약 사이트
- 국내 숙박 예약 사이트 [스테이폴리오](https://www.stayfolio.com/) 를 모티브

## 📌프로젝트 선정 이유
- 전체적으로 군더더기 없는 깔끔하고 모던 한 UI
- 소셜 로그인 API, 지도 API를 써 볼 수 있는 사이트
- 필터와 검색 시스템이 많아, 연습을 해 볼 수 있고, 백엔드 모델링도 할 것이 많아 전체적인 학습을 하기에 좋음 


## 📌개발 기간 및 인원

- 개발기간 : 2022/4/11 ~ 2022/4/21 (약 2주)
- 개발 인원 :
### 🧑‍💻 프론트엔드
|**남용현**|문혜성|장종환|홍두현|
|:----:|:----:|:----:|:----:|
|<img width="200" height="200" alt="남용현" src="https://user-images.githubusercontent.com/95746551/162573146-2b6f6d85-c928-4fd0-ba62-94644140fa53.png">|<img width="200" height="200" alt="문혜성" src="https://user-images.githubusercontent.com/95746551/164890565-7a9c4aee-d45b-462d-b5de-bcec7ccd858f.png">|<img width="200" height="200" alt="장종환" src="https://user-images.githubusercontent.com/95746551/164890562-47dc77ed-780b-47bb-ba0e-cd593924d96c.png">|<img width="200" height="200" alt="홍두현" src="https://user-images.githubusercontent.com/95746551/164890556-07f3a9b9-f416-4efc-9756-789b6b00f30d.png">|
|[Github](https://github.com/sunnyfterrain)|[Github](https://github.com/Moonhyeseong)|[Github](https://github.com/jonghwann)|[Github](https://github.com/HongDuHyeon)|


### 🧑‍💻 백엔드
|김대현|엄재홍|
|:----:|:----:|
|<img width="200" height="200" alt="김대현" src="https://user-images.githubusercontent.com/95746551/164890566-b34e9b20-ee73-4b0c-9cb7-0b0bb56726bc.png">|<img width="200" height="200" alt="엄재홍" src="https://user-images.githubusercontent.com/95746551/164890563-56269fb5-7c68-4402-895d-dd80038c5e03.png">|
|[Github](https://github.com/kdh10806)|[Github](https://github.com/youbeemuhwan)|

🔗[Checkout 11AM : Backend](https://github.com/wecode-bootcamp-korea/31-2nd-checkout-11AM-backend)



## 📌적용 기술 및 구현 기능

### 적용 기술

- Front-End : React.js, React Router, Styled Components, AWS
- Back-End : Python, Django, AWS

### 소통 툴

- Git, Github, Slack, Trello
  ​
### 구현 기능
 
- **남용현 : Nav, Footer, 로그인 페이지**
- 문혜성 : 상세페이지
- 장종환 : 메인 페이지
- 홍두현(PM) : 리스트 페이지

|소셜 로그인|필터, 검색|리스트 페이지|상세 페이지|
|:---:|:---:|:---:|:---:|
|<img width="300" height="200" alt="로그인" src="https://user-images.githubusercontent.com/95746551/164892050-a9cae05f-46c7-47f7-a761-046cfbda283d.gif">|<img width="300" height="200" alt="필터" src="https://user-images.githubusercontent.com/95746551/164892061-28e1b662-4259-4c3c-a3a8-8febe990baf5.gif">|<img width="300" height="200" alt="" src="https://user-images.githubusercontent.com/95746551/164892489-e7d67f82-80c8-4a2d-bf14-b60ff7f84642.gif">|<img width="300" height="200" alt="" src="https://user-images.githubusercontent.com/95746551/164892316-ef688b01-59ca-4966-9365-f3bbf20ace96.gif">|

#### 🧑‍💻내가 맡은 기능
- Navbar
  - 상수데이터를 이용 Nav 메뉴를 구성
  - Nav 내에 위치한 필터, 검색, 달력 예약 기능 구현
  - 해당 검색, 필터, 달력 값을 리스트 페이지로 쿼리스트링 형태로 전달
  
- Login
  - 카카오 로그인 API를 이용 소셜 로그인 구현
  - 카카오 인증 코드를 Redirect 로 받은 후 백엔드 서버 쿼리스트링을 전달
  - 백엔드에서 토큰을 다시 받아 로컬스토리지에 저장
  
## [구현 및 기술 논의 - Wiki](https://github.com/sunnyfterrain/checkout11AM/wiki/checkout11AM)

## 배포
http://checkout11am.s3-website.ap-northeast-2.amazonaws.com/

## 영상 시연

https://youtu.be/c_VUmxRlPv8
  
## 📌Reference

- 이 프로젝트는 [스테오폴리오](https://www.stayfolio.com/) 사이트를 참조하여 학습목적으로 만들었습니다.
- 실무수준의 프로젝트이지만 학습용으로 만들었기 때문에 이 코드를 활용하여 이득을 취하거나 무단 배포할 경우 법적으로 문제될 수 있습니다.
- 이 프로젝트에서 사용하고 있는 사진 대부분은 위코드에서 구매한 것이므로 해당 프로젝트 외부인이 사용할 수 없습니다.
