/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable react/jsx-no-comment-textnodes */
'use client';
import KakaoMap from '@components/KakaoMap/index';
import Footer from '@components/Footer/index';
import Script from 'next/script';
import Header from '@components/Header/index';

export default function Location() {
  return (
    <>
      <script
        src="https://dapi.kakao.com/v2/maps/sdk.js?appkey=f7da64a90767677a5c9a7b39da61bab2&libraries=services,clusterer&autoload=false"
        type="text/javascript"
      />
      <main className="pt-16">
        <Header />
        <h2 className="font-bold text-[20px] pb-2">운동 시설 위치</h2>
        <KakaoMap />
      </main>
      <Footer />
    </>
  );
}