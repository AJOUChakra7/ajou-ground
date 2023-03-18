import LinkBox from 'components/LinkBox/index';
import PlaceStatusBox from 'components/PlaceStatusBox/index';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main>
      <h2>이용 현황</h2>
      <div className="m-3 grid grid-cols-2">
        <PlaceStatusBox title="대운동장" status={1} />
        <PlaceStatusBox title="소운동장" status={0} />
        <PlaceStatusBox title="헬스장" status={0} />
        <PlaceStatusBox title="테니스장" status={2} />
      </div>
      <h2>장소 예약</h2>
      <LinkBox title="대운동장" />
      <LinkBox title="소운동장" />
      <LinkBox title="헬스장" />
      <LinkBox title="테니스장" />
    </main>
  );
}

// page 구성할 때 가장 바깥 tag는 <main>으로 써주세요!
