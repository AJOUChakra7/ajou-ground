import Link from 'node_modules/next/link';
import Image from 'next/image';

export const metadata = {
  title: '아주그라운드: 로그인',
};



export default function Login() {
  return (
    <main>
      <div className="flex flex-col items-center justify-around h-screen text-center">
        <div className="mt-20 flex flex-col items-center gap-10">
          <Image src="/ajouground.svg" alt="logo" width={120} height={120} />
          <h1 className="text-4xl font-extrabold">아주그라운드</h1>
        </div>
        <Link href="/">
          <div className="transition-[0.35s] active:opacity-80 active:animate-pull flex gap-5 shadow-md p-10 py-4 items-center rounded-md">
            <Image src="/google.svg" alt="logo" width={24} height={120} />
            <p className="font-bold">구글 계정으로 로그인</p>
          </div>
        </Link>
        <footer className="text-[11px] text-gray-400">Team chakra7</footer>
      </div>
    </main>
  );
}
