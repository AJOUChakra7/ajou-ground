import Link from 'node_modules/next/link';

export default function LinkBox({ title }) {
  return (
    <Link href="/reservation">
      <div className="rounded shadow m-5 p-5 flex items-center justify-between">
        <h2>{title}</h2>
        <h2>아이콘</h2>
      </div>
    </Link>
  );
}
