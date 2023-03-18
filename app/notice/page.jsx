import MyHistoryDisplayCard from 'components/MyHistoryDisplayCard/index';
import MyReservationDisplayCard from 'components/MyReservationDisplayCard/index';
import Link from 'node_modules/next/link';

export const metadata = {
  title: '아주그라운드',
};

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
    <main>
      <Link href="/" className="text-2xl font-bold">
        {'<'}
      </Link>
      <div className="px-10 py-5">
        <h2 className="font-bold text-lg my-5">예약현황</h2>
        <MyReservationDisplayCard reservationDataList={exampleReservationDataList} />
        <hr className="my-5 border-2 border-blue-800 w-10 text-center mx-auto"></hr>
        <h2 className="font-bold text-lg my-5">사용이력</h2>
        <MyHistoryDisplayCard />
      </div>
    </main>
  );
}
