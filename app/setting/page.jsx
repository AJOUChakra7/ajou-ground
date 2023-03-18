import Link from 'node_modules/next/link';

export const metadata = {
  title: '아주그라운드: 설정',
};

export default function Setting() {
  return (
    <main>
      <Link href="/" className="text-2xl font-bold">
        {'<'}
      </Link>
      <div className="px-10 py-5">
        <h2 className="font-bold text-lg my-5">내 정보</h2>
        <div className="rounded my-5 shadow p-4">
          <h3 className="font-medium text-lg">최지헌</h3>
          <p className="text-xs text-neutral-400">아주대학교 학생</p>
          <div className="h-20">{/* placeholder */}</div>
        </div>
        <hr className="my-5 border-2 border-blue-800 w-10 text-center mx-auto"></hr>
        <div className="rounded my-5 shadow p-4">
          <h3 className="font-medium text-base">예약현황</h3>
        </div>
        <div className="rounded my-5 shadow p-4">
          <h3 className="font-medium text-base">로그아웃</h3>
        </div>
      </div>
    </main>
  );
}
