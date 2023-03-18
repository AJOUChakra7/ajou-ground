'use client';

import MyHistoryDisplayCard from 'components/MyHistoryDisplayCard/index';
import MyReservationDisplayCard from 'components/MyReservationDisplayCard/index';
import { Icon } from '@iconify/react';
import Link from 'node_modules/next/link';

export default function Notice() {
  // 예시 API 데이터
  const exampleReservationDataList = [
    {
      place: '대운동장',
      time: 15,
      date: '2023-03-18',
    },
    {
      place: '소운동장',
      time: 18,
      date: '2023-03-18',
    },
  ];
  return (
    <main className="pt-4 bg-[#fafafa]">
      <Link href="/" className="text-2xl font-bold">
        <Icon icon="material-symbols:arrow-back-ios-rounded" width={18} height={18} />
      </Link>
      <div>
        <h2 className="font-bold text-lg my-5">예약현황</h2>
        <MyReservationDisplayCard reservationDataList={exampleReservationDataList} />
        <hr className="rounded-full my-5 border-2 border-primary-main w-10 text-center mx-auto"></hr>
        <h2 className="font-bold text-lg my-5">사용이력</h2>
        <MyHistoryDisplayCard />
      </div>
    </main>
  );
}
