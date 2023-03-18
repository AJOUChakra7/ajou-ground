'use client';

import Link from 'node_modules/next/link';
import Footer from 'components/Footer';
import Header from '@components/Header/index';

const buttonWrapper =
  'bg-white rounded my-5 shadow p-4 hover:cursor-pointer active:animate-pull transition-[0.35s] active:opacity-80';
const buttonFont = 'font-medium text-base';

export default function Setting() {
  return (
    <>
      <main className="pt-10 bg-[#fafafa]">
        <Header />
        <div>
          <h2 className="font-bold text-lg my-5">내 정보</h2>
          <div className="bg-white rounded my-5 shadow p-4">
            <h3 className="font-medium text-lg">최지헌</h3>
            <p className="text-xs text-neutral-400">아주대학교 학생</p>
            <div className="h-20">{/* placeholder */}</div>
          </div>
          <hr className="rounded-full my-5 border-2 border-primary-main w-10 text-center mx-auto"></hr>
          <Link href="/notice">
            <div className={buttonWrapper}>
              <h3 className={buttonFont}>예약현황</h3>
            </div>
          </Link>
          <Link href="/login">
            <div className={buttonWrapper}>
              <h3 className={buttonFont}>로그아웃</h3>
            </div>
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
