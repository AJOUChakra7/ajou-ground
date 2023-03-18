import { Map, MapMarker } from 'react-kakao-maps-sdk';

export default function KakaoMap() {
  return (
    <Map center={{ lat: 37.280892, lng: 127.045464 }} style={{ width: '100%', height: '360px' }}>
      <MapMarker position={{ lat: 37.280791, lng: 127.044454 }}>
        <div style={{ color: '#000' }}>대운동장</div>
      </MapMarker>
      <MapMarker position={{ lat: 37.280167, lng: 127.0444138 }}>
        <div style={{ color: '#000' }}>소운동장</div>
      </MapMarker>
      <MapMarker position={{ lat: 37.280074, lng: 127.045393 }}>
        <div style={{ color: '#000' }}>헬스장</div>
      </MapMarker>
      <MapMarker position={{ lat: 37.282136, lng: 127.049261 }}>
        <div style={{ color: '#000' }}>테니스장</div>
      </MapMarker>
    </Map>
  );
}
