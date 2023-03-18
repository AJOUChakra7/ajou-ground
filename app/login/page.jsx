export const metadata = {
  title: '아주그라운드: 로그인',
};

export default function Login() {
  return (
    <main>
      <div className="flex flex-col justify-between h-screen text-center">
        <div>{/* 비율유지용 div */}</div>
        <h1 className="text-4xl font-extrabold">아주그라운드</h1>
        <div className="m-5 p-5 bg-neutral-200 rounded font-bold text-sm">구글 계정으로 로그인</div>
        <footer className="m-3">Team chakra7</footer>
      </div>
    </main>
  );
}
