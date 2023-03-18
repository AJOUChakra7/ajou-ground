'use client';
import { useEffect, useState } from 'react';
import { Group } from '@mantine/core';
import { DatePicker } from '@mantine/dates';
import axios from 'axios';
import ReservationBtn from 'components/ReservationBtn/index';
import ImgAndDesc from 'components/ImgAndDesc/index';

import Header from '@components/Header/index';
import Modal from '@components/Modal/index';
import placeToKorean from '../../../functions/placeToKorean';
import useModal from '@components/Modal/useModal';

export default function Reservation({ params }) {
  const [value, setValue] = useState(new Date()); //오늘 날짜로 처음 세팅
  const [nine, setNine] = useState(true);
  const [twelve, setTwelve] = useState(true);
  const [three, setThree] = useState(true);
  const [six, setSix] = useState(true);
  const [selectedTime, setSelectedTime] = useState(null);
  const [getTime, setGetTime] = useState(null);
  const [reserveTime, setReserveTime] = useState(null);
  const [dialog, setDialog] = useState(null);
  const [reserveComplete, setReserveComplete] = useState(false);
  // 한글로 된 장소(params.place)
  const [placeInKorean, setPlaceInKorean] = useState('');

  const getDatereservation = async () => {
    //날짜 누르면 해당 날짜에 대한 예약 정보 날아옴 ${getTime}
    await axios.get(`/api/reservation?date=${getTime}`).then((response) => {
      response.data['9'] ? setNine(false) : setNine(true);
      response.data['12'] ? setTwelve(false) : setTwelve(true);
      response.data['15'] ? setThree(false) : setThree(true);
      response.data['18'] ? setSix(false) : setSix(true);
    });
  };

  const { openModal } = useModal(dialog);

  const reservation = async () => {
    //날짜 누르면 해당 날짜에 대한 예약 정보 날아옴
    await axios
      .post('/api/reservation', {
        startTime: reserveTime,
        ground: '대운동장',
      })
      .then((response) => {
        setReserveComplete(true);
      });
  };
  useEffect(() => {
    setDialog(document.querySelector('dialog'));
    setPlaceInKorean(placeToKorean(params.place));
  }, []);

  useEffect(() => {
    if (reserveComplete == true) {
      window.location.replace('/');
    }
  }, [reserveComplete]);

  useEffect(() => {
    //날짜 눌렀을 경우 읽어 오기 위해 날짜 포맷팅
    setReserveTime('Invalid Date');
    const y = value.getFullYear();
    let m = value.getMonth() + 1;
    const d = value.getDate();
    if (m < 10) {
      m = '0' + m;
    }
    setSelectedTime(null);
    setGetTime(`${y}-${m}-${d}`);
  }, [value]);

  useEffect(() => {
    if (getTime == null) return;
    //getTime이 변경 되면 API 호출
    getDatereservation();
  }, [getTime]);

  useEffect(() => {
    //selectedTime 변경되면 API날려주기 위해 문자열 포맷팅 --> 예약 할 때 바꿔줘도 될것 같음
    const changetime = new Date(
      String(value).slice(0, 16) +
        selectedTime +
        ':' +
        String(value).slice(19, String(value).length),
    );
    setReserveTime(changetime);
  }, [selectedTime]);

  useEffect(() => {
    //예약 API 호출
    if (getTime != null) {
      console.log('good');
      console.log(reserveTime);
      // reservation()
    }
  }, [reserveTime]);

  return (
    <>
      <main className="pt-8">
        <Modal
          title="예약 정보가 맞나요?"
          subtitle="대운동장"
          subtitle2={`${selectedTime}시~${selectedTime + 3}시 `}
          subtitle3={getTime}
          selected={() => {
            localStorage.setItem('reservationState', true);
            reservation();
          }}
        />
        <Header />
        <ImgAndDesc
          imgURL={`../${params.place}.jpeg`}
          title={placeInKorean}
          desc={`아주대학교 ${placeInKorean}`}
        />

        <Group position="center">
          <DatePicker value={value} onChange={setValue} />
        </Group>
        <div className="">
          <h2 className="my-4 mt-8 font-bold text-lg">시간 예약</h2>
          <div className="grid grid-cols-2 gap-3">
            <ReservationBtn
              time="09:00~12:00"
              status={nine}
              selected={selectedTime == 9}
              value={9}
              setSelectedTime={setSelectedTime}
            />
            <ReservationBtn
              time="12:00~15:00"
              status={twelve}
              selected={selectedTime == 12}
              value={12}
              setSelectedTime={setSelectedTime}
            />
            <ReservationBtn
              time="15:00~18:00"
              status={three}
              selected={selectedTime == 15}
              value={15}
              setSelectedTime={setSelectedTime}
            />
            <ReservationBtn
              time="18:00~21:00"
              status={six}
              selected={selectedTime == 18}
              value={18}
              setSelectedTime={setSelectedTime}
            />
          </div>
        </div>
      </main>
      <div className="fixed bottom-0 flex w-full full:w-[25rem]">
        <button
          disabled={reserveTime == 'Invalid Date'}
          onClick={openModal}
          className={
            reserveTime != 'Invalid Date'
              ? 'bg-blue-600 w-full h-10 mt-3 text-center text-white text-lg font-bold'
              : ' bg-neutral-200 w-full h-10 mt-3 text-center text-white text-lg font-bold'
          }
        >
          예약하기
        </button>
      </div>
    </>
  );
}
