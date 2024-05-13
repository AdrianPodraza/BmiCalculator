import Item from "./Item";
import imgHealth from "./../assets/images/icon-eating.svg";
import imgExercise from "./../assets/images/icon-exercise.svg";
import imgSleep from "./../assets/images/icon-sleep.svg";

function ItemSection() {
  return (
    <div className="relative mt-40 ">
      <div className="absolute -z-10 top-0 -left-6 bg-gradient-to-br from-[#D6E6FE] to-[#D6FcFe] w-[100vw] h-full xl:-left-80 xl:w-[200vw] "></div>
      <div className="flex flex-col gap-7 mt-24 mb-24 md:gap-16 xl:flex-row">
        <Item
          imgSrc={imgHealth}
          title="Healthy eating"
          desc="Healthy eating promotes weight control, disease prevention, better digestion, immunity, mental clarity, and mood."
        />
        <Item
          imgSrc={imgExercise}
          title="Regular exercise"
          desc="Exercise improves fitness, aids weight control, elevates mood, and reduces disease risk, fostering wellness and longevity."
        />
        <Item
          imgSrc={imgSleep}
          title="Adequate sleep"
          desc="Sleep enhances mental clarity, emotional stability, and physical wellness, promoting overall restoration and rejuvenation."
        />
      </div>
    </div>
  );
}

export default ItemSection;
