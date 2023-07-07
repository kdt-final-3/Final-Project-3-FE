
[![Netlify Status](https://api.netlify.com/api/v1/badges/f14f6822-855c-4a25-b7d7-5c8aacecfb93/deploy-status)](https://app.netlify.com/sites/kdt-final/deploys)

# JOBKOK

## < KDT3 Front-End : Final Project Team3 - SSAK3 >

<img width="1021" alt="%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-04-10_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_5 00 07" src="https://user-images.githubusercontent.com/83855636/232267130-727049c5-eb9b-4ae0-9f58-faf61f86e3bf.png">


# 1. **프로젝트 소개**

지원자들에게는 투명하고 공정한 안내를 절차별로 도와주고, 사업주에게는 더 쉬운 자동화 채용 절차를 도와주는 서비스 입니다.

- 인재관리 페이지에서 인재 추천 기능을 통해 지원자의 정보를 효율적으로 확인할 수 있습니다.
- 폼 링크 관리를 통해 각 채용 플랫폼에 흩어져 있던 인재들을 한 곳에 모아 고스팅을 낮출 수 있습니다.
- 인재 보관함에서 합격 인재와 탈락 인재 관리를 통해 갑작스러운 결원 보충도 쉽게 가능합니다.
- 서비스 내에서 지원자와 관련된 알림을 쉽게 보내고 관리할 수 있습니다.

### 개발 기간

2023.03.03 ~ 2023.04.10

# 2. **팀원 소개 & 역할 분담**

<table border>
  <tbody>
    <tr>
       <td align="center" width="200px">
        <img width="100%" src="https://avatars.githubusercontent.com/u/83855636?v=4"  alt="유지석님"/><br />
        <br/>
        <a href="https://github.com/yujiseok">
          <img src="https://img.shields.io/badge/팀장 : 유지석-000?style=flat-round&logo=GitHub&logoColor=white"/>
        </a>
      </td>
      <td align="center" width="200px">
        <img width="100%" src='https://avatars.githubusercontent.com/u/90189513?v=4'  alt="이은영님"/><br />
        <br/>
        <a href="https://github.com/eun0leee">
          <img src="https://img.shields.io/badge/이은영-000?style=flat-round&logo=GitHub&logoColor=white"/>
        </a>
      </td>
      <td align="center" width="200px">
        <img width="100%" src="https://avatars.githubusercontent.com/u/113823957?v=4"  alt="이혜란님"/><br />
       <br/>
        <a href="https://github.com/hyerani">
          <img src="https://img.shields.io/badge/이혜란-000?style=flat-round&logo=GitHub&logoColor=white"/>
        </a>
      </td>
   <td align="center" width="200px">
        <img width="100%" src="https://avatars.githubusercontent.com/u/103406196?v=4"  alt="조효림님"/><br/>
       <br/>
        <a href="https://github.com/hyorimcho">
          <img src="https://img.shields.io/badge/조효림-000?style=flat-round&logo=GitHub&logoColor=white"/>
        </a>
      </td>
     </tr>
         
  </tbody>
</table>

### 유지석

- 프로젝트 설정
  - 프로젝트 초기 설정
- 인재 관리(메인 페이지)
  - 채용 폼 목록 조회
  - 각 채용폼 별 당일 인재, 총 인재, 채용 일정 조회
  - 인재 목록 9명씩 슬라이드로 구현 (**swiper)** 키워드, 지원일, 채용 단계별 조회
  - 인재 찜
  - 칸반 보드를 활용한 채용 단계 수정 (**react-beautiful-dnd**)
- 인재 현황
  - 칸반 보드를 활용한 채용 단계 수정 (**react-beautiful-dnd**)
  - 각 단계별 인재 조회 (전체, 서류제출, 면접, 최종조율)
    - useSearchParams를 활용하여 새로고침 시에도 필터링 유지
  - 페이지네이션 (10명)
    - useSearchParams를 활용하여 새로고침 시에도 페이지 유지
  - 선택 인재 (최대 4명) 채용 단계 수정
  - 인재 찜 및 탈락
- 탈락 인재 보관함
  - 전체 탈락 인재 조회, 찜된 탈락 인재 조회
    - useSearchParams를 활용하여 새로고침 시에도 필터링 유지
- 리덕스를 활용한 유저 상태 관리
- axios의 interceptors를 활용한 인증 구현

### 이은영

- 채용 폼 작성
  - 신규로 채용 폼 생성 
  - 비제어 컴포넌트 React-hook-form 라이브러리를 사용하여, 불필요한 렌더링과 연산 감소 및 간결한 코드를 작성
  - 사용자가 값을 입력하자마자 즉각적으로 에러 문구를 출력하기로 했고, 이를 위해 실시간으로 값을 갱신해 주는 React-hook-form 의 onChange mode 를 사용하였습니다.  이를 통해 사용자가 submit 버튼을 누르기 전에 입력값이 유효한지 검사해줘, UX 친화적으로 구현할 수 있었습니다. 
  - 입력값의 복잡한 유효성 검증은 Zod 라이브러리를 사용해 간단하게 처리했고, Typescript 와 함께 사용함으로써 타입의 안정성을 향상시켰습니다.
  - 폼의 중복 제출을 방지하기 위해, 버튼의 disabled 속성에 현재 제출 중인 상태인지 아닌지를 알아낼 수 있는 isSubmitting 값을 설정해 주었습니다.
  - 나가기 및 삭제 클릭시 채용폼관리 메인으로 이동합니다.
  - 작성완료 클릭시 api 호출돼 폼이 서버로 저장됩니다. 그 후 모달창이 뜨고 링크복사를 하거나 지원서로 이동할 수 있습니다.
- 지원자 인증 및 작성
  - 지원자 인증
    -  zod, react-hook-form을 활용하여 이름, 휴대전화, 이메일, 인증번호 유효성 검사를 진행하고 오류시 에러메시지를 표시합니다.
    -  submit 했을 때 미입력 항목이 있으면 해당 요소로 focus 됩니다.
    -  이메일 입력값이 없으면 확인창('이메일을 입력해주세요')이 뜹니다.
    -  이메일 입력 상태에 따라 코드발송 버튼 활성화 여부가 달라집니다.
    -  인증번호 입력 상태에 따라 인증완료 버튼 활성화 여부가 달라집니다.
    -  지원자 중복확인 api 를 요청해 중복확인합니다.
    -  지원서 작성 버튼 클릭시 지원서 작성 페이지로 이동합니다.
  - 지원자 작성
    - zod, react-hook-form을 활용하여 모든 입력값에 대한 유효성 검사를 진행합니다.
    - submit 했을 때 모두 입력해야 다음 페이지로 이동합니다.
    - 스크롤의 움직임에 따라 사이드바가 움직입니다.
- 기업 정보 변경
  - 전화번호와 비밀번호를 변경할 수 있습니다.

### 이혜란

- 로그인, 회원가입, 비밀번호 찾기
  - 로그인
    - zod, react-hook-form을 활용하여 이메일, 비밀번호 유효성 검사가 진행됩니다.
    - 아이디와 비밀번호 입력 형식이 다를 시 안내 메세지가 뜨고 로그인 버튼이 비활성화 상태로 되어있습니다.
    - 아이디와 비밀번호를 모두 올바르게 입력하면 로그인 버튼이 활성화됩니다.
  - 회원가입
    - zod, react-hook-form을 활용하여 이메일, 비밀번호, 전화번호, 대표자명 등 유효성 검사가 진행됩니다.
    - 리덕스 툴킷을 활용하여 회원가입 절차에 따른 회원 정보를 관리합니다.
    - 이메일 인증, 인증번호 확인을 거쳐 다음 단계로 넘어갈 수 있습니다.
    - 이메일 - 비밀번호 - 전화번호 - 대표자명 - 기업명 - 사업자 등록번호를 모두 입력해야 회원가입이 완료됩니다.
  - 비밀번호 찾기
    - 가입한 이메일 인증, 인증번호 확인을 거쳐 다음 단계로 넘어갈 수 있습니다.
    - 이메일 인증이 완료되면 새로운 비밀번호를 재설정 할 수 있습니다.
- 채용 폼 관리 메인
  - 폼 작성하기 버튼
    - 상단 작성하기 버튼 클릭시 새로운 폼 작성하는 페이지로 넘어갑니다.
  - 타 기업 폼 리스트 출력
    - 타기업 폼 리스트를 스와이퍼를 활용하여 화면에 출력되도록 했습니다.
    - 클릭 시 폼 작성하는 페이지로 넘어갑니다.
  - 생성완료 된 폼 리스트 출력
    - 링크 생성이 완료된 폼 리스트를 출력되도록 했습니다.
    - 링크 생성이 완료된 폼을 클릭 하면 해당 상세 페이지로 넘어갑니다.
- 채용 폼 검색
  - 검색 기능
    - 폼 리스트의 제목을 기준으로 검색 단어가 포함되어 있을 시 검색이 되도록 설정 되어있습니다.

### 조효림

- 공통 레이아웃
  - navbar 구현
- 인재 상세 페이지
  - 인재 찜하기, 취소하기, 탈락 처리
    - 새로고침시에도 정보가 날아가지 않고 다른 페이지에서 나타나는 인재 정보에도 같은 정보가 표시됩니다.
    - 탈락 처리가 된 인재는 탈락 인재 보관함으로 이동합니다.
  - 타임라인
    - 서류 검토, 면접일 지정, 채용 확정을 기반으로 날짜가 입력되고 막대가 칠해집니다. 이전의 단계를 진행하지 않으면 다음 절차로 진행할 수 없습니다.
  - 면접 정보
    - 역시 react-query 의 useMutation 을 사용하여 정보를 업데이트 합니다. invalidateQueries를 사용하여 화면을 즉각적으로 업데이트 합니다.
  - 평가 노트
    - 기존에 평가가 되어있다면 그 평가를, 없다면 기본 메세지가 출력되어 평가를 할 수 있습니다.
- 알림센터
  - 필터링
    - react-query 의 select의 옵션을 사용해 채용 단계를 필터링하여 목록에 보여줍니다. 또한 useSearchParams 를 사용하여 새로고침시에도 정보가 유지됩니다.
  - 인재 선택 및 메세지 전송
    - 최대 4명의 인재에게 단체 메세지를 보낼 수 있습니다. 알림 단계에 따라 기본 메세지가 출력되며 react-hook-form 의 watch함수를 사용하여 글자수를 관리하며 1,000자 이상 입력할 수 없습니다. 메세지 입력 후 주의사항에 동의해야만 메세지 전송이 가능합니다.

# 3. **기술 스택**

- vite, react, typescript, redux-toolkit, tailwindcss, axios, react-hook-form, zod, react-router-dom, react-query

# 4. **협업 방식**

- 공통 소통 툴: 슬랙, 노션, 게더타운
- FE & UXUI: 피그마, 제플린
- FE & BE: 깃헙, 포스트맨

# 5. 구현 내용 시연
<details>
<summary>1. 회원가입, 비밀번호 찾기</summary>

![1 1 인증_회원가입](https://github.com/kdt-final-3/jobkok-fe/assets/90189513/c0dfdcc6-7689-4999-a05d-780ecd4dfc34)
![1 2 인증_비밀번호 찾기](https://github.com/kdt-final-3/jobkok-fe/assets/90189513/ef1657ad-35d3-45a3-a12c-a96c4d1fdacf)

<br>
</details>

<details>
<summary>2. 로그인, 로그아웃</summary>

![1 3 인증_로그인](https://github.com/kdt-final-3/jobkok-fe/assets/90189513/0da2110e-2ccb-4f38-ac44-0dc69e1f5f48)
![7 5 로그아웃](https://github.com/kdt-final-3/jobkok-fe/assets/90189513/4aeff2a5-0828-4dc3-b969-007e3736d086)

<br>
</details>

<details>
<summary>3. 폼링크 관리</summary>

![3 1 폼링크_진입](https://github.com/kdt-final-3/jobkok-fe/assets/90189513/5ef25dd7-9ce0-4bf8-b0f4-9b15786dbfa1)
![3 2 폼링크_타기업폼](https://github.com/kdt-final-3/jobkok-fe/assets/90189513/9a526721-5c09-43f1-a5e5-c93553b9de13)
![3 7-폼링크_검색_2](https://github.com/kdt-final-3/jobkok-fe/assets/90189513/ba1eb6c6-280b-4f95-88eb-df5c995bf123)

<br>
</details>

<details>
<summary>4. 폼작성</summary>
  
![3 3 폼작성_진입](https://github.com/kdt-final-3/jobkok-fe/assets/90189513/0896698d-5746-46cf-9be5-16a2fdf8245f)
![3 4 폼작성_데이트피커](https://github.com/kdt-final-3/jobkok-fe/assets/90189513/2bb3d03d-ce51-4ed9-b7c6-19b120127e86)
![3 5 폼작성_작성과정](https://github.com/kdt-final-3/jobkok-fe/assets/90189513/1a03c02a-b056-4028-bf0f-f5dc4099d57c)
![3 6 폼작성_작성완료](https://github.com/kdt-final-3/jobkok-fe/assets/90189513/d18db939-a081-499a-a606-0cbb5d03549f)

<br>
</details>

<details>
<summary>5. 지원자 인증 </summary>

![4 1 지원자인증_인증성공](https://github.com/kdt-final-3/jobkok-fe/assets/90189513/89592563-0ab9-4bcc-8bab-da920dfd1b0d)
![4 2 지원자인증_미입력](https://github.com/kdt-final-3/jobkok-fe/assets/90189513/367ae945-2f0a-46a6-b613-e674f315bd43)

<br>
</details>

<details>
<summary>6. 지원자 지원서 작성</summary>

![4 3 지원서작성_작성중](https://github.com/kdt-final-3/jobkok-fe/assets/90189513/c98db035-fecd-440c-aaad-c633f4e56b38)
![4 4 지원서작성_제출](https://github.com/kdt-final-3/jobkok-fe/assets/90189513/43657336-b23d-4d2d-a88e-05d8b86058d1)

<br>
</details>

<details>
<summary>7. 인재 관리</summary>
  
![2 1 인재 관리 - 인재폼 등록 안한 경우](https://github.com/kdt-final-3/jobkok-fe/assets/90189513/a79e99b9-5500-40f7-b862-1abc36534795)
![5 1 인재 관리 - 인재폼 등록 지원자 없는 경우](https://github.com/kdt-final-3/jobkok-fe/assets/90189513/cd7ba2d5-521d-4c05-8480-d7d11b4d9b9f)
![5 2 인재 관리 - 슬라이드](https://github.com/kdt-final-3/jobkok-fe/assets/90189513/b03007de-e0ff-4554-9150-c13753d142e3)

<br>
</details>

<details>
<summary>8. 인재 현황</summary>

![5 3 인재 현황 - 칸반](https://github.com/kdt-final-3/jobkok-fe/assets/90189513/19c76d11-f31f-4f64-b672-076b95c976d8)
![5 4 인재 현황 - 단계별 인재 조회](https://github.com/kdt-final-3/jobkok-fe/assets/90189513/4bc2706c-da2e-4c94-9c5e-8ea5cc7660c5)
![5 6 인재 현황 - 페이지네이션](https://github.com/kdt-final-3/jobkok-fe/assets/90189513/3b1dbd4a-ed6b-4ecb-9149-de727bbfef1b)
![5 7 인재 현황 - 단계 수정](https://github.com/kdt-final-3/jobkok-fe/assets/90189513/f1a6f450-3614-4c13-83ca-0134decf8a5a)

<br>
</details>

<details>
<summary>9. 인재 상세페이지</summary>
  
![6 1 상세 페이지 찜, 면접정보 타임라인](https://github.com/kdt-final-3/jobkok-fe/assets/90189513/0a04a2ca-ffac-45f8-a77d-edc12639d609)

<br>
</details>

<details>
<summary>10. 알림 센터</summary>
  
![6 2 알림 센터 인재 선택](https://github.com/kdt-final-3/jobkok-fe/assets/90189513/e3030494-ffcc-4e7e-9f8b-82ae55d0b7ae)
![6 3 알림 센터 채용 단계 필터링](https://github.com/kdt-final-3/jobkok-fe/assets/90189513/a02f17ec-6259-402e-9e9c-9126cd7433e6)
![6 4 알림 센터 기본 메세지 출력](https://github.com/kdt-final-3/jobkok-fe/assets/90189513/80f6f6f2-2e87-48e1-806e-a42d11edfabc)
![6 5 알림 센터 메세지 보내기](https://github.com/kdt-final-3/jobkok-fe/assets/90189513/97f5e724-c0bb-436a-b9b7-ad283e922ac5)

<br>
</details>

<details>
<summary>11. 탈락 인재</summary>
  
![7 1 탈락 인재  - 탈락 인재 없을 시](https://github.com/kdt-final-3/jobkok-fe/assets/90189513/97c27ac3-b668-42fe-a935-8eb9fedb96d9)
![7 2 탈락 인재  - 인재 조회](https://github.com/kdt-final-3/jobkok-fe/assets/90189513/b42ada8a-dfd8-46c2-8e0f-6fa7a48ec7a2)

<br>
</details>

<details>
<summary>12. 기업정보 변경</summary>
  
![7 3 기업정보_수정](https://github.com/kdt-final-3/jobkok-fe/assets/90189513/d858b9cf-884e-4a48-a02e-4e74fb8458df)
![7 4 기업정보_계정삭제](https://github.com/kdt-final-3/jobkok-fe/assets/90189513/6cb61079-8076-4d2e-a04b-556cd73f419f)

<br>
</details>

# 6. **회고**

### 유지석

좋았던 점

- 소프트 스킬에 필요한 다양한 툴을 사용할 수 있어 좋았다.
- 게더타운을 활용해 팀원들과 의견을 공유하는 것과 피그마를 통해 실시간으로 디자인과 기획을 확인할 수 있었던 점이 좋았다.
- 다른 파트의 팀원들과의 소통을 통해 개발에만 국한되지 않고, 시야를 좀 더 넓힐 수 있었던 것 같다.
- 개발 쪽으로는 타입스크립트, 리액트 쿼리에 좀 더 익숙해질 수 있었다.
- 커스텀 훅을 사용하는 것도 익숙해졌다.

아쉬운 점

- 기획의 방향성을 잡는 데 시간이 많이 든 점.
- 실제로 개발하는 시간이 압도적으로 부족했던 점.
- 우선순위와 일정을 확실히 관리하지 못한점.

### 이은영

좋았던 점

- 게더타운 데일리스크럼과 다양한 문서로 원활한 소통을 위해 모두가 노력한 것.
- 타직군과 커뮤니케이션하는 법을 배운 점(네이밍의 중요성).
- 촉박한 시간 속에서도 프론트파트끼리 열심히 코드리뷰한 것.
- 타 팀원의 코드를 보며 배운 것이 정말 많았던 점.
- 안해봤던 지원서 구현을 해본 점.
- 멘토링을 통해 기능구현의 고민을 해결하고, 현업의 다양한 이야기를 들을 수 있었던 점.

아쉬운 점

- 초반부터 일정관리를 탄탄히 하지 못한 것.
- 타파트에 개인별 작업상황 공유가 잘 안됐던 점(담당자 찾는데 시간걸림).
- 잡담을 더 시간내서 하지 못한 것.
- 초반에 컴포넌트 재사용성 더 고민하지 못했던 것.

### 이혜란

좋았던 점

- 디자이너, 백엔드 팀원들과의 여럿이서 진행하는 프로젝트여서 간접적인 현업 경험이 가능했던 점.
- 노션, 피그마 등 프로젝트의 문서화나 게더타운이나 슬랙을 통해서 소통을 더 열심히 하려 모두가 노력하고 협업 스킬을 늘린 점.
- 기능 구현을 하며 여러가지 새로운 라이브러리들을 많이 배우고 적용시켜 볼 수 있었던 점.
- 팀원들의 코드리뷰를 하면서 몰랐던 새로운 기능들이나 방법들을 배울 수 있었던 점

아쉬운 점

- 초기 기획과 일정 관리가 미흡했던 부분이 있었던 점.
- 시간에 쫓겨서 개발을 효율적으로 하지 못하고 코드의 중복사용이나 재사용되는 컴포넌트를 분리하지 못한 점.
- 새로운 라이브러리들을 제대로 사용하지 못한 점.

### 조효림

좋았던 점

- 다른 파트 분들과 협업해본 것.
- 질문이 있을 때 노션, 개더타운, 피그마를 이용해서 실시간 혹은 중요도 순으로 처리되게 한 것.
- 컨벤션을 함께 정하고 지키려 노력한 것.
- css를 하면서 내가 만든 늘 디자인이 아쉬웠는데 uxui 분들이 있으니 예쁜 디자인이 생겨나서 좋았다. 그러면서 만나는 피그마와 제플린과 조금 친해진 것 같아 좋다.
- 코드 리뷰를 하며 다른 팀원이 코드를 어떻게 쓰는지 보고 인사이트를 얻었던 점과 피드백을 받을 수 있었던 것.
- 부족함을 느끼고 더 열심히 할 동기부여가 된 점.

아쉬운 점

- RFP에서 방향성이 멀어지며 개발하는 시간이 절대적으로 부족했던 것.
- 파이널 프로젝트인데 시간이 짧아서 정말 아쉽다.
