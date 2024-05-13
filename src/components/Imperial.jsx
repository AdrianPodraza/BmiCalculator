/* eslint-disable react/prop-types */

function Imperial({ setFeet, setStones, setInches, setPounds }) {
  const handleFeetChange = (event) => {
    setFeet(event.target.value);
  };

  const handleInchesChange = (event) => {
    setInches(event.target.value);
  };

  const handleStonesChange = (event) => {
    setStones(event.target.value);
  };

  const handlePoundsChange = (event) => {
    setPounds(event.target.value);
  };

  return (
    <div>
      <form className="flex flex-col">
        <label htmlFor="height">Height</label>
        <div className="flex gap-3">
          <div className="flex items-center relative w-full">
            <input
              className="w-full border-2 p-5 border-borders rounded-xl outline-none"
              type="number"
              onChange={handleFeetChange}
            ></input>
            <span className="text-primary-blue absolute right-0 top-0 bottom-0 flex items-center px-3 text-2xl font-semibold">
              ft
            </span>
          </div>
          <div className="flex items-center relative w-full">
            <input
              className="w-full border-2 p-5 border-borders rounded-xl outline-none"
              type="number"
              onChange={handleInchesChange}
            ></input>
            <span className="text-primary-blue absolute right-0 top-0 bottom-0 flex items-center px-3 text-2xl font-semibold">
              in
            </span>
          </div>
        </div>
        <label htmlFor="weight">Weight</label>
        <div className="flex items-center relative">
          <div className="flex gap-3 w-full">
            <div className="flex items-center relative w-full">
              <input
                className="w-full border-2 p-5 border-borders rounded-xl outline-none"
                type="number"
                onChange={handleStonesChange}
              ></input>
              <span className="text-primary-blue absolute right-0 top-0 bottom-0 flex items-center px-3 text-2xl font-semibold">
                st
              </span>
            </div>
            <div className="flex items-center relative w-full">
              <input
                className="w-full border-2 p-5 border-borders rounded-xl outline-none"
                type="number"
                onChange={handlePoundsChange}
              ></input>
              <span className="text-primary-blue absolute right-0 top-0 bottom-0 flex items-center px-3 text-2xl font-semibold">
                lbs
              </span>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Imperial;
