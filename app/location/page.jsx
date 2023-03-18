/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable react/jsx-no-comment-textnodes */
'use client';
import KakaoMap from '@components/KakaoMap/index';
import Footer from '@components/Footer/index';
import Script from 'next/script';
import Header from '@components/Header/index';


import Lottie from "react-lottie-player";
import locationJson from "../../public/location.json";

export default function Location() {
  return (
    <>
      <script
        src="https://dapi.kakao.com/v2/maps/sdk.js?appkey=f7da64a90767677a5c9a7b39da61bab2&libraries=services,clusterer&autoload=false"
        type="text/javascript"
      />
      <main className="pt-8">
        <Header />
         <span className="mx-auto">
          <Lottie loop animationData={locationJson} style={{ margin : "0 auto", width : 100, height : 100}} play />;
        </span>
        <KakaoMap />
        <h2 className="text-center text-primary-main text-[18px] pt-6">교내에 있는 운동 시설 위치에요!</h2>
      </main>
      <Footer />
    </>
  );
}