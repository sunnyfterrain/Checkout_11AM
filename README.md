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
|남용현|문혜성|장종환|홍두현|
|:----:|:----:|:----:|:----:|
|<img width="200" height="200" alt="남용현" src="https://user-images.githubusercontent.com/95746551/162573146-2b6f6d85-c928-4fd0-ba62-94644140fa53.png">|<img width="200" height="200" alt="문혜성" src="https://user-images.githubusercontent.com/95746551/164890565-7a9c4aee-d45b-462d-b5de-bcec7ccd858f.png">|<img width="200" height="200" alt="장종환" src="https://user-images.githubusercontent.com/95746551/164890562-47dc77ed-780b-47bb-ba0e-cd593924d96c.png">|<img width="200" height="200" alt="홍두현" src="https://user-images.githubusercontent.com/95746551/164890556-07f3a9b9-f416-4efc-9756-789b6b00f30d.png">|
|[Github](https://github.com/sunnyfterrain)|[Github](https://github.com/Moonhyeseong)|[Github](https://github.com/jonghwann)|[Github](https://github.com/HongDuHyeon)|


<img width="254" alt="dohyeon" src="https://user-images.githubusercontent.com/95746551/164890556-07f3a9b9-f416-4efc-9756-789b6b00f30d.png">
<img width="253" alt="jonghwhan" src="https://user-images.githubusercontent.com/95746551/164890562-47dc77ed-780b-47bb-ba0e-cd593924d96c.png">
<img width="252" alt="jaehong" src="https://user-images.githubusercontent.com/95746551/164890563-56269fb5-7c68-4402-895d-dd80038c5e03.png">
<img width="252" alt="hyesung" src="https://user-images.githubusercontent.com/95746551/164890565-7a9c4aee-d45b-462d-b5de-bcec7ccd858f.png">
<img width="250" alt="daehyeon" src="https://user-images.githubusercontent.com/95746551/164890566-b34e9b20-ee73-4b0c-9cb7-0b0bb56726bc.png">

### 🧑‍💻 백엔드
|김대현|엄재홍|
|:----:|:----:|
|<img width="200" height="200" alt="김대현" src="https://user-images.githubusercontent.com/95746551/164890566-b34e9b20-ee73-4b0c-9cb7-0b0bb56726bc.png">|<img width="200" height="200" alt="엄재홍" src="https://user-images.githubusercontent.com/95746551/164890563-56269fb5-7c68-4402-895d-dd80038c5e03.png">|
|[Github](https://github.com/kdh10806)|[Github](https://github.com/youbeemuhwan)|

🔗[Fruitz Company : Backend](https://github.com/wecode-bootcamp-korea/31-2nd-checkout-11AM-backend)



## 📌적용 기술 및 구현 기능

### 적용 기술

- Front-End : React.js, React Router, SASS
- Back-End : Python, Django web framework, AWS

### 소통 툴

- Git, Github, Slack, Trello
  ​
### 구현 기능
 
- 남용현 : NAV, ASIDE, 회원인가 시스템, 상품리스트, 상품상세, 장바구니
- 문혜성 : 메인페이지, 팀멤버소개페이지
- 장종환 :
- 홍두현(PM) :

|메인페이지|회원관리|상품페이지|
|:---:|:---:|:---:|
|<img width="300" height="200" alt="회원가입" src="https://user-images.githubusercontent.com/95746551/162576974-3ff8621d-a1af-42ac-8655-0a1601669f4f.gif">|<img width="300" height="200" alt="회원관리" src="https://user-images.githubusercontent.com/95746551/162576969-6428e9f7-e756-4a7f-9e42-4cc082b38785.gif">|<img width="300" height="200" alt="회원가입" src="https://user-images.githubusercontent.com/95746551/162374253-77dfda2e-fbc5-4890-90c2-861b596dadf2.gif">

#### 🧑‍💻내가 맡은 기능
- Navbar
  - 상수데이터를 이용 네브바 메뉴 구성
  - 로그인시 토근저장후 LOGIN -> LOGOUT으로 변환, 로그아웃 클릭시 토큰삭제와 함께 로그아웃
  - Context API 를 통해 로그인 접근권한 설정
  
- Aside
  - 상수데이터를 이용 아코디언 트리 구조의 메뉴구성
  - 메뉴 클릭시 라우터를 이용 해당하는 페이지로 이동 및 백엔드 통신 
  
- 상품 리스트
  - 백엔드 서버간 Query String 전달 API 사용
  - API 이용 상품 리스트 페이지 구현 
  
- 상품 상세
  - 백엔드 서버간 Path Parameter 전달 API 사용
  - API 를 이용하여 상품의 세부 정보 페이지 구현
  - 제품의 수량 조절 기능구현 백엔드서버 반영 API 전달
  
- 장바구니
  - 회원 유무를 감지하여 해당 회원에게 저장된 장바구니 데이터 API 수신
  - 주문 계속하기와, 장바구니 바로 가기 모달창 구현 페이지 이동간 편한 플로우
  - 장바구니 내 제품의 수량변경 및 삭제 백엔드 Query String API 전달 백엔드 서버 반영
  
## [구현 및 기술 논의 - Wiki](https://github.com/sunnyfterrain/31-1st-TheCreationOfWeb-frontend/wiki)
  
## 📌Reference

- 이 프로젝트는 [프릳츠커피](https://fritz.co.kr/) 사이트를 참조하여 학습목적으로 만들었습니다.
- 실무수준의 프로젝트이지만 학습용으로 만들었기 때문에 이 코드를 활용하여 이득을 취하거나 무단 배포할 경우 법적으로 문제될 수 있습니다.
- 이 프로젝트에서 사용하고 있는 사진 대부분은 위코드에서 구매한 것이므로 해당 프로젝트 외부인이 사용할 수 없습니다.
