import { Icon } from '@iconify/react';
import Link from 'node_modules/next/link';

export default function Header() {
  return (
    <header className="absolute top-0 h-[3rem] bg-white z-9999 ml-[-1rem] justify-around gap-2 items-center text-center bottom-0 py-4 w-full shadow-[0_-2px_10px_rgba(0,0,0,0.10)] full:w-[25rem]">
      <Link href="/" className="text-2xl font-bold">
        <Icon className="ml-4" icon="material-symbols:arrow-back-ios-rounded" width={18} height={18} />
      </Link>
    </header>
  )
}

