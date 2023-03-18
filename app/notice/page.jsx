'use client';

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
    <main className="pt-4 bg-[#fafafa] overflow-scroll">
      <Link href="/" className="text-2xl font-bold">
        <Icon icon="material-symbols:arrow-back-ios-rounded" width={18} height={18} />
      </Link>
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
