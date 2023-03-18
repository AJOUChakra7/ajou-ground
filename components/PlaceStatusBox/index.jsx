export default function PlaceStatusBox({ title, status }) {
  // title: 장소 이름, status: 사용현황(0: 사용가능, 1: 사용중, 2: 사용불가)
  return (
    <div className="rounded shadow p-3 bg-white">
      <h3 className="my-1 font-normal text-xs text-neutral-700">{title}</h3>
      <p
        className={`my-1 text-xl font-bold ${
          status == 0
            ? 'text-green-600'
            : status == 1
            ? 'text-yellow-600'
            : status == 2
            ? 'text-red-600'
            : ''
        }`}
      >
        {status == 0
          ? '사용가능'
          : status == 1
          ? '사용중'
          : status == 2
          ? '사용불가'
          : '알 수 없음'}
      </p>
    </div>
  );
}
