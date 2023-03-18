import { Map, MapMarker } from 'react-kakao-maps-sdk';

export default function KakaoMap() {
  return (
    <Map center={{ lat: 37.2830557, lng: 127.0448373 }} style={{ width: '100%', height: '360px' }}>
      <MapMarker position={{ lat: 37.2830557, lng: 127.0448373 }}>
        <div style={{ color: '#000' }}>Hello World!</div>
      </MapMarker>
    </Map>
  );
}
