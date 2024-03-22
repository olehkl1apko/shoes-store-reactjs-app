import { Nav } from "./components/Nav";
import nikeShoeImg from "./assets/nike-big.png";
import { Select } from "./components/Select";
import { Card } from "./components/Card";
import nike1 from "./assets/nike1.png";
import nike2 from "./assets/nike2.png";
import nike3 from "./assets/nike3.png";

const SHOE_LIST = [
  { id: 1, src: nike1, bgColor: "bg-paleYellow", title: "Nike Mid Blazer" },
  { id: 2, src: nike2, bgColor: "bg-lavender", title: "Nike Air Max 270" },
  { id: 3, src: nike3, bgColor: "bg-paleGreen", title: "Nike Air Max 2090" },
];

function App() {
  const bigShoeImage = (
    <div className=" flex justify-center items-center h-[100%] bg-gradient-to-br from-[#F637CF] from-5% via-[#E3D876] via-40% to-[#4CC4C6] to-90%">
      <img className="animate-float " src={nikeShoeImg} />
    </div>
  );

  const shoeDetail = (
    <>
      <div className="font-black text-5xl md:text-9xl">
        Nike Air
        <br />
        Max 270
      </div>
      <div className="font-medium text-md md:text-xl ">
        {"Nike's Ist lifestyle Air Max returns with a vibrant color gradient"}
        <br />
        {"that's sure to turn heads."}
      </div>
      <div className="flex space-x-6 items-center">
        <div className="text-3xl md:text-6xl font-extrabold">160 $</div>
        <Select title="QTY" options={["1", "2", "3", "4"]} />
        <Select
          title="SIZE"
          options={["41", "42", "43", "44", "45", "46", "47"]}
        />
      </div>
      <div className="flex items-center space-x-10">
        <button className="anim-click bg-black hover:bg-gray-900 active:bg-gray-700 flex justify-center items-center h-14 w-44  text-white">
          Add to bag
        </button>

        <a href="#" className=" underline font-bold text-lg underline-offset-4">
          View details
        </a>
      </div>
    </>
  );

  const listSection = (
    <>
      <div className="flex flex-col items-center justify-center mt-20 ">
        <div className="bg-[url('./assets/lines.png')] bg-[length:500px_40px] bg-center bg-no-repeat text-5xl font-extrabold">
          NEW ARRIVALS
        </div>
      </div>
      {/*flex items-center justify-between flex-col xl:flex-row*/}

      <div className="justify-between grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[repeat(3,25%)] gap-8 mt-10">
        {SHOE_LIST.map((shoe) => (
          <Card
            key={shoe.id}
            title={shoe.title}
            src={shoe.src}
            bgColor={shoe.bgColor}
          />
        ))}
      </div>
    </>
  );

  return (
    <div className="px-4  lg:px-8 xl:px-24">
      <Nav />
      <div className=" lg:mt-5 flex lg:flex-row flex-col-reverse">
        <div className=" flex-1 space-y-8 mt-10 lg:mt-0 ">{shoeDetail}</div>
        {/* ml-28 to make it align with the menu */}
        <div className="lg:-mt-52 flex-1 z-[-1] lg:ml-28">{bigShoeImage}</div>
      </div>
      {listSection}
    </div>
  );
}

export default App;
