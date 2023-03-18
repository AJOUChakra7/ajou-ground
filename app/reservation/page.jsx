"use client"
import { useEffect, useState } from 'react';
import { Group } from '@mantine/core';
import { DatePicker } from '@mantine/dates';
import axios from 'axios';
export default function Reservation () {
    const [value, setValue] = useState(new Date()); //오늘 날짜로 처음 세팅
    const getDatereservation = async ()=> {    //날짜 누르면 해당 날짜에 대한 예약 정보 날아옴
        await axios.post("/api/url작성",{
          method : "POST",
          Headers:{"Content-Type": "application/json" },
          body : {
            date : value
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
   
    </main>
  );
}