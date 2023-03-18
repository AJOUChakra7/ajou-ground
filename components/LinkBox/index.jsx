import Link from 'node_modules/next/link';
import { Icon } from '@iconify/react';
import placeToKorean from 'functions/placeToKorean';

export default function LinkBox({ place, icon }) {
  return (
    <Link href={`/reservation/${place}`}>
      <div className="rounded bg-white shadow px-4 py-6 flex items-center justify-between">
        <h2 className="font-bold text-base">{placeToKorean(place)}</h2>
        <h2>
          <Icon icon={icon} height="30" width="40" />
        </h2>
      </div>
    </Link>
  );
}
