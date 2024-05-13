import Logo from "./components/Logo";
import Description from "./components/Description";
import Input from "./components/Input";
import BmiResults from "./components/BmiResults";
import ItemSection from "./components/ItemSection";
import LastSection from "./components/LastSection";
import { useState } from "react";
function App() {
  const [bmi, setBmi] = useState(0);
  return (
    <>
      <div className=" bg-gradient-to-br rounded-xl  from-[#D6E6FE] to-[#D6FcFe] w-full h-[120%] xl:w-[70vw] xl:pb-28 ">
        <div className="xl:p-[140px] xl:pt-[77px] xl:pb-0 xl:pr-0 ">
          <Logo classes="w-full flex items-center justify-center xl:justify-start " />
          <div className=" xl:flex xl:justify-between w-full   ">
            <Description />
            <Input bmi={bmi} setBmi={setBmi} />
          </div>
        </div>
      </div>
      <div className="p-6 flex flex-col gap-7 xl:p-[140px] xl:pt-[77px]">
        <BmiResults bmi={bmi} />
        <ItemSection />
        <LastSection />
      </div>
    </>
  );
}

export default App;
