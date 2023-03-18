import Link from 'node_modules/next/link';

export default function Reservationpos({ time }) {
  return (
    <Link href="/reservation">
      <button className="bg-sky-100 rounded-lg w-4/5 m-4 h-4/5" >
        <h2 className = "text-xs text-left">{time}</h2>
        <h2 className = "text-xs text-left">예약 가능</h2>
      </button>
    </Link>
  );
}

