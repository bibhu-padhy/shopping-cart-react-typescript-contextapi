type StoreItemProps = {
  brand: string;
  id: number;
  price: number;
  thumbnail: string;
  title: string;
};

export function StoreItem({
  brand,
  id,
  price,
  thumbnail,
  title,
}: StoreItemProps) {
  return (
    <div className="">
      <img src={thumbnail} className="h-40 w-full" />
      <div className="flex items-center mt-1 px-2">
        <div className="flex-1 text-lg">{title}</div>
        <div className="flex">
          <button className="bg-slate-500 px-2 rounded">-</button>
          <div className="mx-2 font-medium">1</div>
          <button className="bg-slate-500 px-2 rounded">+</button>
        </div>
      </div>
    </div>
  );
}
