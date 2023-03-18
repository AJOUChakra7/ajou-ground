export default function MyHistoryDisplayCard({ reservationHistoryList }) {
  return (
    <div className="rounded my-3 shadow p-4 bg-white">
      {/* 사용기록이 있을때 */}
      {reservationHistoryList.map((oneReservationHistory, index) => {
        return (
<<<<<<< HEAD
          <div id={index} key={index}>
=======
          <div key = {oneReservationHistory.place} id={index}>
>>>>>>> main
            <h2 className="font-bold text-lg text-blue-900">{oneReservationHistory.place}</h2>
            <h3>
              {oneReservationHistory.time}:00 ~ {oneReservationHistory.time + 3}:00
            </h3>
            <p className="text-sm text-neutral-600">{oneReservationHistory.date}</p>
          </div>
        );
      })}

      {/* 사용기록이 없을때 */}
      {reservationHistoryList.length == 0 ? (
        <p className="my-10 text-center text-sm text-neutral-700">사용이력이 없습니다</p>
      ) : (
        ''
      )}
    </div>
  );
}
