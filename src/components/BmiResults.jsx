import Image from "./../assets/images/image-man-eating.webp";
import ImageDesktop from "./../assets/images/imageManDesktop.jpg";
// eslint-disable-next-line react/prop-types
function BmiResults({ bmi }) {
  const getBMIDescription = (bmi) => {
    if (bmi < 18.5) {
      return `BMI below 18.5 - "A BMI value below 18.5 may indicate underweight. Underweight can lead to weakened immunity, decreased energy levels, and increased risk of nutrient deficiencies. It's advisable to consult with a healthcare professional to determine appropriate nutritional strategies and physical activity to achieve a healthy weight."`;
    } else if (bmi >= 18.5 && bmi < 24.9) {
      return `BMI range from 18.5 to 24.9 - "A BMI value ranging from 18.5 to 24.9 is considered a healthy weight. Maintaining a healthy weight can lower the risk of future health issues such as obesity and type 2 diabetes. Aim for a balanced diet with reduced fat and sugar content, enriched with plenty of fruits and vegetables. Additionally, strive for regular physical activity, ideally around 30 minutes daily for five days a week."`;
    } else if (bmi >= 24.9 && bmi < 29.9) {
      return `BMI from 25 to 29.9 - "BMI in the range of 25 to 29.9 indicates overweight. Overweight increases the risk of various diseases such as heart disease, hypertension, and diabetes. It is recommended to reduce calorie intake and increase physical activity to achieve a healthy weight. `;
    } else {
      return `BMI above 30 - "A BMI above 30 indicates obesity. Obesity is a significant health concern associated with increased risk of numerous diseases, including heart disease, stroke, type 2 diabetes, and certain types of cancer. Consultation with a healthcare professional is recommended to develop a treatment plan, which may include dietary changes, regular physical activity, and other healthy lifestyle strategies."`;
    }
  };
  return (
    <div className="flex flex-col gap-7 items-center md:flex-row w-full xl:justify-between">
      <div className="w-1/2 -ml-10 xl:w-1/3 ">
        <img className="h-full xl:hidden " src={Image} />
        <img className="hidden  xl:block rounded-xl " src={ImageDesktop} />
      </div>
      <div className="flex flex-col gap-5 w-1/2 xl:w-1/3">
        <h2 className="text-3xl font-semibold xl:text-5xl">
          What your BMI result means
        </h2>
        <span className="text-gray xl:w-3/4 xl:text-xl">
          {bmi ? getBMIDescription(bmi) : "Fill the input field to get result"}
        </span>
      </div>
    </div>
  );
}

export default BmiResults;
