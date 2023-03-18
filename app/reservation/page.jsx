'use client';
import { useEffect, useState } from 'react';
import { Group } from '@mantine/core';
import { DatePicker } from '@mantine/dates';
import axios from 'axios';
import ReservationBtn from 'components/ReservationBtn/index';
export default function Reservation() {
  const [value, setValue] = useState(new Date()); //오늘 날짜로 처음 세팅
  const [nine, setNine] = useState(true);
  const [twelve, setTwelve] = useState(false);
  const [three, setThree] = useState(true);
  const [six, setSix] = useState(true);
  const [selectedTime, setSelectedTime] = useState(null);
  const getDatereservation = async () => {
    //날짜 누르면 해당 날짜에 대한 예약 정보 날아옴
    await axios
      .post('http://10.168.39.146/api/reservation', {
        method: 'GET',
        Headers: { 'Content-Type': 'application/json' },
        body: {
          date: value,
        },
      })
      .then((response) => {
        console.log(response);
      });
  };
  const reservation = async () => {
    //날짜 누르면 해당 날짜에 대한 예약 정보 날아옴
    await axios
      .post('http://10.168.39.146/api/reservation', {
        method: 'POST',
        Headers: { 'Content-Type': 'application/json' },
        body: {
          startTime: value,
          ground: '대운동장',
        },
      })
      .then((response) => {
        console.log(response);
      });
  };

  useEffect(() => {
    console.log(value);
    getDatereservation();
  }, [value]);

  return (
    <main>
      <Group position="center">
        <DatePicker value={value} onChange={setValue} />
      </Group>
      <button onClick={reservation}>시간 예약</button>
      <div className="grid grid-cols-2 gap-3">
        {}
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
          selected={selectedTime == 3}
          value={3}
          setSelectedTime={setSelectedTime}
        />
        <ReservationBtn
          time="18:00~21:00"
          status={six}
          selected={selectedTime == 6}
          value={6}
          setSelectedTime={setSelectedTime}
        />
      </div>
    </main>
  );
}
