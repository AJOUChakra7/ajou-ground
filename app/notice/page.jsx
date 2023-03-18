'use client';

import Header from '@components/Header/index';
import MyHistoryDisplayCard from 'components/MyHistoryDisplayCard/index';
import MyReservationDisplayCard from 'components/MyReservationDisplayCard/index';
import { Icon } from '@iconify/react';
import Link from 'node_modules/next/link';
import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import Footer from '@components/Footer/index';
export default function Notice() {
  const [reservationList, setreservationList] = useState([])
  const outerDivRef = useRef()
  const getreservationlist = async () => {
    await axios
      .get("/api/user")
      .then((response) => {
        setreservationList(response.data.reservations)
      });
  };
  useEffect(() => { 
    getreservationlist()
    console.log(reservationList)
  }, []);


  // 예시 사용기록 데이터
  const exampleReservationHistoryList = [
    {
      place: '대운동장',
      time: 15,
      date: '2023-03-17',
    },
    {
      place: '소운동장',
      time: 18,
      date: '2023-03-16',
    },
    {
      place: '헬스장',
      time: 9,
      date: '2023-03-14',
    },
  ];
  return (
    <>
    <main className="bg-[#fafafa] pt-10">
      <Header />
      <div>
        <h2 className="font-bold text-lg my-5">예약현황</h2>
        <MyReservationDisplayCard reservationDataList={reservationList} />
        <hr className="rounded-full my-5 border-2 border-primary-main w-10 text-center mx-auto"></hr>
        <h2 className="font-bold text-lg my-5">사용이력</h2>
        <MyHistoryDisplayCard reservationHistoryList={exampleReservationHistoryList} />
      </div>
    </main>
    <Footer/>
    </>
  );
}
