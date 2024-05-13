/* eslint-disable react/prop-types */
function InputField({ setWeight, setHeight }) {
  const handleWeightChange = (event) => {
    setWeight(event.target.value);
  };

  const handleHeightChange = (event) => {
    setHeight(event.target.value);
  };

  return (
    <div className="w-full">
      <form className="flex flex-col gap-4 md:flex-row w-full">
        <div className="flex flex-col gap-3 w-full md:w-1/2">
          <label htmlFor="height">Height</label>
          <div className="flex items-center relative">
            <input
              className="w-full border-2 p-5 border-borders rounded-xl outline-none"
              type="number"
              onChange={handleHeightChange}
            ></input>
            <span className="text-primary-blue absolute right-0 text-2xl font-semibold mr-6">
              cm
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-3 w-full md:w-1/2">
          <label htmlFor="weight">Weight</label>
          <div className="flex items-center relative">
            <input
              className="w-full border-2 p-5 border-borders rounded-xl outline-none"
              type="number"
              onChange={handleWeightChange}
            ></input>
            <span className="text-primary-blue absolute right-0 text-2xl font-semibold mr-6">
              kg
            </span>
          </div>
        </div>
      </form>
    </div>
  );
}

export default InputField;
