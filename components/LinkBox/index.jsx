import Link from 'node_modules/next/link';
import { Icon } from '@iconify/react';

export default function LinkBox({ title,icon }) {
  return (
    <Link href="/reservation">
      <div className="rounded shadow m-5 p-5 flex items-center justify-between">
        <h2>{title}</h2>
        <h2><Icon icon={icon} height="30" width = "40"/></h2>
      </div>
    </Link>
  );
}
