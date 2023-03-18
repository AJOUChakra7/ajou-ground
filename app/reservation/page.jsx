"use client"
import { useEffect, useState } from 'react';
import { Group } from '@mantine/core';
import { DatePicker } from '@mantine/dates';
import Reservationimpos from 'components/Reservationimpos/index';
import Reservationpos from 'components/Reservationpos/index';
import axios from 'axios';
export default function Reservation () {
    const [value, setValue] = useState(new Date()); //오늘 날짜로 처음 세팅
    const [nine,setNine] = useState(true)
    const [twelve, setTwelve] = useState(false)
    const [three, setThree] = useState(true)
    const [six, setSix] = useState(true)
    const getDatereservation = async ()=> {    //날짜 누르면 해당 날짜에 대한 예약 정보 날아옴
        await axios.post("http://10.168.39.146/api/reservation",{
          method : "GET",
          Headers:{"Content-Type": "application/json" },
          body : {
            date : value
          }
        }).then(response => {
          console.log(response)
        })
      }
    const reservation = async ()=> {    //날짜 누르면 해당 날짜에 대한 예약 정보 날아옴
      await axios.post("http://10.168.39.146/api/reservation",{
        method : "POST",
        Headers:{"Content-Type": "application/json" },
        body : {
          startTime : value,
          ground : "대운동장"
        }
      }).then(response => {
        console.log(response)
      })
    }

      useEffect(() => {
          console.log(value)
        getDatereservation()
      }, [value])

  return (
    <main>
        <Group position="center">
            <DatePicker value={value} onChange={setValue} />
        </Group>
        <div className = "grid grid-rows-2 grid-flow-col">
          {nine == true ? 
          <Reservationpos time="09:00~12:00"/>:
          <Reservationimpos time="09:00~12:00"/>
           }
          {three == true ? 
          <Reservationpos time="15:00~18:00"/>:
          <Reservationimpos time="15:00~18:00"/>
           }
           {twelve == true ? 
          <Reservationpos time="12:00~15:00"/>:
          <Reservationimpos time="12:00~15:00"/>
           }
           {six == true ? 
          <Reservationpos time="18:00~21:00"/>:
          <Reservationimpos time="18:00~21:00"/>
           }
        </div>
        <button onClick={reservation}>예약</button>
    </main>
  );
}