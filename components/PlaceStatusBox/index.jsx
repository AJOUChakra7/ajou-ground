export default function PlaceStatusBox({ title, status }) {
  // title: 장소 이름, status: 사용현황(0: 사용가능, 1: 사용중, 2: 사용불가)
  return (
    <div className="rounded shadow m-2 p-3">
      <h3>{title}</h3>
      <span>
        {status == 0
          ? '사용가능'
          : status == 1
          ? '사용중'
          : status == 2
          ? '사용불가'
          : '알 수 없음'}
      </span>
    </div>
  );
}
