// 영어로 된 체육관 이름을 한국어로 바꿔주는 함수. 영어로 된 체육관 이름의 표준을 정함
export default function placeToKorean(place) {
  let placeInKorean = '';
  switch (place) {
    case 'big-ground':
      placeInKorean = '대운동장';
      break;
    case 'small-ground':
      placeInKorean = '소운동장';
      break;
    case 'health-gym':
      placeInKorean = '헬스장';
      break;
    case 'tennis':
      placeInKorean = '테니스장';
      break;
  }
  return placeInKorean;
}
