// eslint-disable-next-line react/prop-types
function ItemLast({ imgSrc, title, desc }) {
  return (
    <div className="rounded-xl flex flex-col gap-7 shadow  xl:w-1/2  ">
      <div className="p-7 flex flex-col gap-7  ">
        <div className="flex gap-7 ">
          <img className="w-8" src={imgSrc} alt={title} />
          <h3 className="font-semibold">{title}</h3>
        </div>
        <span>{desc}</span>
      </div>
    </div>
  );
}

export default ItemLast;
