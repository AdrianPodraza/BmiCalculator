import ItemLast from "./ItemLast";
import imgGender from "./../assets/images/icon-gender.svg";
import imgAge from "./../assets/images/icon-age.svg";
import imgMuscle from "./../assets/images/icon-muscle.svg";
import imgPregnancy from "./../assets/images/icon-pregnancy.svg";
import imgRace from "./../assets/images/icon-race.svg";
function LastSection() {
  return (
    <div className="flex flex-col gap-7  md:grid md:grid-cols-4 md:grid-rows-4 xl:place-items-center xl:mt-36 xl:grid-cols-7  xl:grid-rows-3 xl:gap-2  ">
      <div className="flex flex-col gap-7  xl:col-span-3 xl:col-start-1 md:col-span-4 md:col-start-1">
        <h3 className="text-secondary text-2xl font-semibold text-center xl:text-6xl xl:text-left">
          Limitations of BMI
        </h3>
        <span className="text-gray text-center xl:text-left xl:text-2xl">
          Although BMI is often a practical indicator of healthy weight, it is
          not suited for every person. Specific groups should carefully consider
          their BMI outcomes, and in certain cases, the measurement may not be
          beneficial to use.
        </span>
      </div>
      <div className="xl:col-start-5 col-span-2 xl:max-w-[365px] md:col-start-1">
        <ItemLast
          imgSrc={imgGender}
          title={"Gender"}
          desc={
            "The development and body fat composition of girls and boys vary with age. Consequently, a child's age and gender are considered when evaluating their BMI."
          }
        />
      </div>
      <div className="xl:col-start-4 col-span-2 xl:max-w-[365px]  md:col-start-3">
        <ItemLast
          imgSrc={imgAge}
          title={"Ace"}
          desc={
            "In aging individuals, increased body fat and muscle loss may cause BMI to underestimate body fat content."
          }
        />
      </div>
      <div className="xl:col-start-6 col-span-2 xl:max-w-[365px] md:col-start-1">
        <ItemLast
          imgSrc={imgMuscle}
          title={"Muscle"}
          desc={
            "BMI may misclassify muscular individuals as overweight or obese, as it doesn't differentiate muscle from fat."
          }
        />
      </div>
      <div className="xl:col-start-3 col-span-2 xl:max-w-[365px] md:col-start-3">
        <ItemLast
          imgSrc={imgPregnancy}
          title={"Pregnancy"}
          desc={
            "Expectant mothers experience weight gain due to their growing baby. Maintaining a healthy pre-pregnancy BMI is advisable to minimise health risks for both mother and child."
          }
        />
      </div>
      <div className="xl:col-start-5 col-span-2 xl:max-w-[365px] md:col-start-2">
        <ItemLast
          imgSrc={imgRace}
          title={"Race"}
          desc={
            "Certain health concerns may affect individuals of some Black and Asian origins at lower BMIs than others. To learn more, it is advised to discuss this with your GP or practice nurse."
          }
        />
      </div>
    </div>
  );
}

export default LastSection;
