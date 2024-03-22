import { useRef } from "react";
import { Select } from "../components/Select";
import { QTY, SIZES } from "../constant";

export const ShoeDetail = ({ shoe, onClickAdd }) => {
  const qtyRef = useRef();
  const sizeRef = useRef();

  const shoeImage = (
    <div className="flex-center relative  -z-10 h-[100%] bg-gradient-to-br from-[#F637CF] from-5% via-[#E3D876] via-40% to-[#4CC4C6] to-90%">
      <img className="animate-float " src={shoe.src} />
    </div>
  );

  const shoeDescription = (
    <>
      <div className="pulse text-5xl font-black md:text-9xl">{shoe.title}</div>
      <div className="text-md font-medium md:text-xl ">{shoe.description}</div>
      <div className="flex items-center space-x-6">
        <div className="text-3xl font-extrabold md:text-6xl">
          {shoe.price} $
        </div>
        <Select
          onChange={(qty) => (qtyRef.current = qty)}
          title="QTY"
          options={QTY}
        />
        <Select
          onChange={(size) => (sizeRef.current = size)}
          title="SIZE"
          options={SIZES}
        />
      </div>
      <div className="flex items-center space-x-10">
        <button
          onClick={() => onClickAdd(shoe, qtyRef.current, sizeRef.current)}
          className="anim-click flex-center h-14 w-44  bg-black text-white hover:bg-gray-900  active:bg-gray-700"
        >
          Add to bag
        </button>

        <a href="#" className=" text-lg font-bold underline underline-offset-4">
          View details
        </a>
      </div>
    </>
  );

  return (
    <>
      <div className="mt-10 flex-1 space-y-8 lg:mt-0 ">{shoeDescription}</div>
      {/* ml-28 to make it align with the menu */}
      <div className="flex-1 lg:-mt-52  lg:ml-28">{shoeImage}</div>
    </>
  );
};