export default function MyReservationDisplayCard({ reservationDataList }) {
  return (
    <div>
      {/* 예약한 것이 있을때 */}
      {reservationDataList.map((oneReservationData, index) => {
        return (
          <div className="rounded my-3 shadow p-4" id={index}>
            <h2 className="font-bold text-lg text-blue-900">{oneReservationData.place}</h2>
            <h3>
              {oneReservationData.time}:00 ~ {oneReservationData.time + 3}:00
            </h3>
            <p className="text-sm text-neutral-600">{oneReservationData.date}</p>
          </div>
        );
      })}

      {/* 예약한 것이 없을때 */}
      {reservationDataList.length == 0 ? (
        <div className="rounded my-3 shadow p-4">
          <p className="my-10 text-center text-sm text-neutral-700">예약된 공간이 없습니다</p>
        </div>
      ) : (
        ''
      )}
    </div>
  );
}
