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
    <div className="p-6 flex flex-col gap-7 xl:p-[140px] xl:pt-[77px]">
      <div className="absolute -z-10 top-0 left-0  bg-gradient-to-br rounded-xl from-[#D6E6FE] to-[#D6FcFe] w-full h-full xl:w-3/4 xl:h-[90vh]"></div>
      <Logo classes="w-full flex items-center justify-center xl:justify-start" />
      <div className=" xl:flex xl:justify-between items-center xl:h-[90vh]">
        <Description />
        <Input bmi={bmi} setBmi={setBmi} />
      </div>

      <BmiResults bmi={bmi} />
      <ItemSection />
      <LastSection />
    </div>
  );
}

export default App;
