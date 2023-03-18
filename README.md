<center>
<img src="https://user-images.githubusercontent.com/79848632/226138516-de4d0874-2520-4de0-95fb-81cc3641a58a.png" />
</center>

<h1 align="center">
  아주그라운드
</h1>
<p align="center">
<img src="https://user-images.githubusercontent.com/79848632/226137905-22c72f73-cbf9-430f-9c4b-d9f1360bac06.gif"/>
</p>
<h4 align="center">
  소프트웨어융합대학에서 주관한 '1박 2일 아주톤'에서 만든 프로젝트입니다.
</h4>
<p align="center">
  아주대학교 학우들의 불편함을 해소하기 위해 <b>운동시설 예약 시스템</b>을 제작해보았습니다.
</p>

## 팀원 구성

|                          유정협                           |                          송재한                           |                          설규원                           |                          최지헌                           |
| :-------------------------------------------------------: | :-------------------------------------------------------: | :-------------------------------------------------------: | :-------------------------------------------------------: |
|                      사이버보안학과                       |                        미디어학과                         |                      소프트웨어학과                       |                      소프트웨어학과                       |
|                          FE, BE                           |                        FE, Design                         |                            FE                             |                          FE, BE                           |
| ![](https://avatars.githubusercontent.com/u/43203911?v=4) | ![](https://avatars.githubusercontent.com/u/79848632?v=4) | ![](https://avatars.githubusercontent.com/u/64053782?v=4) | ![](https://avatars.githubusercontent.com/u/18477791?v=4) |
|     [@yujeonghyeop](https://github.com/yujeonghyeop)      |       [@wisesaturn](https://github.com/wisesaturn)        |           [@seolcu](https://github.com/seolcu)            |       [@jiheon-dev](https://github.com/jiheon-dev)        |

## 기술 스택

<p align="center">
  <img src="https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=next.js&logoColor=white"/>&nbsp;&nbsp;
  <img src="https://img.shields.io/badge/javascript-yellow?style=for-the-badge&logo=javascript&logoColor=white"/>&nbsp;&nbsp;
  <img src="https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=TailwindCSS&logoColor=white"/>&nbsp;&nbsp;
</p>
<p align="center">
    <img src="https://img.shields.io/badge/express-000000?style=for-the-badge&logo=express&logoColor=white"/>&nbsp;&nbsp;
  <img src="https://img.shields.io/badge/mongodb-47A248?style=for-the-badge&logo=mongodb&logoColor=white"/>&nbsp;&nbsp;
</p>
<p align="center">
  <img src="https://img.shields.io/badge/vercel-000000?style=for-the-badge&logo=vercel&logoColor=white"/>&nbsp;&nbsp;
</p>

<p align="center">
  <a href="#introduce">Introduce</a> •
  <a href="#develop-rule">Develop Rule</a> •
  <a href="#design">Design</a> •
  <a href="#activity">Activity</a>
</p>

<p align="center">
<img src="https://user-images.githubusercontent.com/79848632/226139102-0c99b7f6-4243-4d64-9b5b-095332a774e5.gif" />
</p>

## Introduce

### 기대 효과

- 현재 체육관을 사용할 수 있는지 빠르게 확인할 수 있습니다.
- 예약 가능한 시간을 쉽게 조회하고 예약할 수 있습니다.
- 자신이 예약한 시간과 사용 이력을 쉽게 조회할 수 있습니다.
- 지도를 통해 각 체육관의 위치를 한눈에 파악할 수 있습니다.

### 폴더 구조

- `Next.js`의 `App Directory` 방식을 사용하였습니다.

- client

```bash
- app
  |-- login
  |     |-- page.jsx
  |-- reservation
  |     |-- [place]
  |           |-- page.jsx
  |-- layout.jsx
  |-- page.jsx
```

- server

```bash
- lib
  |-- functions
  |-- middleware
  |-- models
  |-- utils
- routes
  |-- index,js

```

### Design

- [Figma](https://www.figma.com/file/I6xXCTa1rH4heAsQVkGVs7/%EC%95%84%EC%A3%BC%EA%B7%B8%EB%9D%BC%EC%9A%B4%EB%93%9C?node-id=0%3A1&t=qCAyNg5qekD83735-1) 를 통하여 디자인 시안을 공유하고, 작업하였습니다.
