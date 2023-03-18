export default function ImgAndDesc({ imgURL, title, desc }) {
  return (
    <div className="my-5 shadow">
      <img className="rounded-t-xl" src={imgURL} alt={title + ' 사진'} width="100%"></img>
      <div className="p-4">
        <h2 className="font-bold text-lg">{title}</h2>
        <p className="font-normal text-xs text-neutral-500">{desc}</p>
      </div>
    </div>
  );
}
