/* eslint-disable react/prop-types */

function Card({ img, name }) {
  console.log(img);
  return (
    <div className="flex justify-center p-1">
      <div className="flex  relative flex-col border-[0.5px] justify-center border-white bg-black dark:border-gray-500 dark:bg-white overflow-hidden rounded">
        <img className="w-full rounded-lg px-2 py-2 object-cover" src={img} />
        <div className="p-2 text-center">
          <h4 className="text-night-text dark:text-day-text sm:text-[12px] text-[8px]">
            {name}
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Card;
