/* eslint-disable react/prop-types */
function Result({ bmi, healthyWeight }) {
  const getBMIDescription = (bmi, healthyWeight) => {
    if (bmi < 18.5) {
      return `Your BMI suggests you’re underweight. Your ideal weight is between ${healthyWeight}.`;
    } else if (bmi >= 18.5 && bmi < 24.9) {
      return `Your BMI suggests you’re a healthy weight. Your ideal weight is between ${healthyWeight}.`;
    } else if (bmi >= 24.9 && bmi < 29.9) {
      return `Your BMI suggests you’re overweight. Your ideal weight is between ${healthyWeight}.`;
    } else {
      return `Your BMI suggests you’re obese. Your ideal weight is between ${healthyWeight}.`;
    }
  };
  return bmi ? (
    <div className="bg-primary-blue rounded-xl p-7 flex flex-col text-white gap-7 md:rounded-r-full md:flex-row md:justify-between">
      <div className="flex flex-col">
        <span>Your BMI is...</span>
        <span className="text-5xl text-white font-bold">
          {(1 * Number(bmi)).toFixed(2)}
        </span>
      </div>
      <span className="md:w-1/2">{getBMIDescription(bmi, healthyWeight)}</span>
    </div>
  ) : (
    <div className="bg-primary-blue rounded-xl p-7 flex flex-col text-white gap-7  md:rounded-r-full">
      <span className="text-2xl text-white font-bold">Welcome!</span>
      <span>
        Enter your height and weight and you’ll see your BMI result here
      </span>
    </div>
  );
}

export default Result;
