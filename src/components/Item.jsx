/* eslint-disable react/prop-types */
function Item({ imgSrc, title, desc }) {
  return (
    <div className="flex flex-col gap-7 md:flex-row xl:flex-col">
      <img src={imgSrc} className="w-16" />
      <div className="flex flex-col gap-4">
        <h3 className="text-secondary text-2xl font-semibold xl:font-bold">
          {title}
        </h3>
        <span className="text-gray xl:w-1/2 xl:font-semibold xl:text-xl">
          {desc}
        </span>
      </div>
    </div>
  );
}

export default Item;
