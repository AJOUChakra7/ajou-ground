'use client';
import KakaoMap from '@components/KakaoMap/index';
import Footer from '@components/Footer/index';
import Script from 'next/script';

export default function Location() {
  return (
    <>
      <Script
        src={`https://dapi.kakao.com/v2/maps/sdk.js?appkey=f7da64a90767677a5c9a7b39da61bab2&libraries=services,clusterer&autoload=false`}
        // strategy="beforeInteractive"
        onLoad={() => {
          console.log('Script has loaded');
        }}
      />
      <main>
        <h2>지도 페이지</h2>
        <KakaoMap />
      </main>
      <Footer />
    </>
  );
}
