import Link from 'node_modules/next/link';

export default function Reservationimpos({ time }) {
  return (
    <Link href="/reservation">
      <button className="bg-slate-200 rounded-lg w-4/5 m-4 h-4/5" >
        <h2 className = "text-xs text-left">{time}</h2>
        <h2 className = "text-xs text-left">예약 불가</h2>
      </button>
    </Link>
  );
}

