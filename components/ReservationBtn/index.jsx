import Link from 'node_modules/next/link';

export default function ReservationBtn({ time, status, selected, value, setSelectedTime }) {
  return (
      <button
        disabled = {status == true ? false:true}
        onClick={() => setSelectedTime(value)}
        className={`rounded-lg p-3 ${
          status == true && selected == true
            ? 'bg-blue-600 text-white'
            : status == true && selected == false
            ? 'bg-sky-50 border-2 border-blue-500'
            : 'bg-neutral-200'
        }`
      }
      >
        <h2 className="text-xs text-left">{time}</h2>
        <h2 className={`text-xs text-left font-bold ${status == true ? '' : 'text-neutral-500'}`}>
          {status == true ? '예약 가능' : '예약 불가'}
        </h2>
      </button>
  );
}
