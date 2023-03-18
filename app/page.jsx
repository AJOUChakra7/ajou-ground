/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable react/jsx-no-comment-textnodes */
'use client';
import LinkBox from 'components/LinkBox/index';
import PlaceStatusBox from 'components/PlaceStatusBox/index';
import Footer from 'components/Footer';

import Image from 'node_modules/next/image';

import { useEffect, useState } from 'react';
import Spinner from '@components/Spinner/index';
import ToastMessage from '@components/Toast/index';

import Lottie from "react-lottie-player";
import weightJson from "../public/weight.json";

export default function Home() {
  const [loadingState, setLoadingState] = useState(true);
  const [successReservationState, setsuccessReservationState] = useState(null);

  useEffect(() => {
    setsuccessReservationState(localStorage.getItem('reservationState'));
    setTimeout(() => {
      setLoadingState(false);
    }, 100 * Math.floor(Math.random() * 20));
  }, []);

  return (
    <>
      <script
        src="https://dapi.kakao.com/v2/maps/sdk.js?appkey=f7da64a90767677a5c9a7b39da61bab2&libraries=services,clusterer&autoload=false"
        type="text/javascript"
      />
      {loadingState && <Spinner />}
      {!loadingState && successReservationState && (
        <ToastMessage message="예약이 완료되었습니다" type="success" />
      )}
      <main className="bg-[#fafafa]">
        <span className="mx-auto">
          <Lottie loop animationData={weightJson} style={{ margin : "0 auto", width : 100, height : 100}} play />;
        </span>
        <div className="">
          <h2 className="font-bold my-3">이용 현황</h2>
          <div className="grid grid-cols-2 gap-2 my-3">
            <PlaceStatusBox title="대운동장" status={1} />
            <PlaceStatusBox title="소운동장" status={0} />
            <PlaceStatusBox title="헬스장" status={0} />
            <PlaceStatusBox title="테니스장" status={2} />
          </div>
        </div>

        <div className="my-10">
          <h2 className="font-bold my-3">장소 예약</h2>
          <div className="my-3 flex flex-col gap-4">
            <LinkBox place="big-ground" icon="noto-v1:soccer-ball" />
            <LinkBox place="small-ground" icon="noto-v1:soccer-ball" />
            <LinkBox place="health-gym" icon="map:gym" />
            <LinkBox place="tennis" icon="openmoji:tennis" />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

// page 구성할 때 가장 바깥 tag는 <main>으로 써주세요!
