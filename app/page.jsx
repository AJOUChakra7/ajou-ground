
'use client';
import LinkBox from 'components/LinkBox/index';
import PlaceStatusBox from 'components/PlaceStatusBox/index';
import { Inter } from 'next/font/google';
import { Icon } from '@iconify/react';
import Footer from 'components/Footer'

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
    <main className="bg-[#fafafa]">
      <div className="my-10">
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
          <LinkBox title="대운동장" icon="noto-v1:soccer-ball" />
          <LinkBox title="소운동장" icon="noto-v1:soccer-ball" />
          <LinkBox title="헬스장" icon="map:gym" />
          <LinkBox title="테니스장" icon="openmoji:tennis" />
        </div>
      </div>
    </main>
    <Footer />
    </>
  );
}

// page 구성할 때 가장 바깥 tag는 <main>으로 써주세요!
