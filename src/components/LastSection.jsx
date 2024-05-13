import ItemLast from "./ItemLast";
import imgGender from "./../assets/images/icon-gender.svg";
import imgAge from "./../assets/images/icon-age.svg";
import imgMuscle from "./../assets/images/icon-muscle.svg";
import imgPregnancy from "./../assets/images/icon-pregnancy.svg";
import imgRace from "./../assets/images/icon-race.svg";
function LastSection() {
  return (
    <div className="flex flex-col ">
      <div className="flex flex-col gap-7">
        <div className="flex flex-col gap-7 xl:w-1/2">
          <h3 className="text-secondary text-2xl font-semibold text-center xl:text-6xl xl:text-left">
            Limitations of BMI
          </h3>
          <span className="text-gray text-center xl:text-left xl:text-2xl">
            Although BMI is often a practical indicator of healthy weight, it is
            not suited for every person. Specific groups should carefully
            consider their BMI outcomes, and in certain cases, the measurement
            may not be beneficial to use.
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-7 md:grid md:grid-cols-2 xl:place-items-center xl:mt-36   ">
        <ItemLast
          imgSrc={imgGender}
          title={"Gender"}
          desc={
            "The development and body fat composition of girls and boys vary with age. Consequently, a child's age and gender are considered when evaluating their BMI."
          }
        />
        <ItemLast
          imgSrc={imgAge}
          title={"Ace"}
          desc={
            "In aging individuals, increased body fat and muscle loss may cause BMI to underestimate body fat content."
          }
        />
        <ItemLast
          imgSrc={imgMuscle}
          title={"Muscle"}
          desc={
            "BMI may misclassify muscular individuals as overweight or obese, as it doesn't differentiate muscle from fat."
          }
        />
        <ItemLast
          imgSrc={imgPregnancy}
          title={"Pregnancy"}
          desc={
            "Expectant mothers experience weight gain due to their growing baby. Maintaining a healthy pre-pregnancy BMI is advisable to minimise health risks for both mother and child."
          }
        />
      </div>
      <div className="md:flex md:items-center w-full md:justify-center xl:grid xl:grid-cols-2 xl:place-items-center xl:gap-7  ">
        <div className="md:w-1/2 xl:w-full xl:flex xl:justify-center">
          <ItemLast
            imgSrc={imgRace}
            title={"Race"}
            desc={
              "Certain health concerns may affect individuals of some Black and Asian origins at lower BMIs than others. To learn more, it is advised to discuss this with your GP or practice nurse."
            }
          />
        </div>
      </div>
    </div>
  );
}

export default LastSection;
