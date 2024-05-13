import { useState, useEffect } from "react";
import Result from "./Result";
import InputField from "./InputField";
import Imperial from "./Imperial";

// eslint-disable-next-line react/prop-types
function Input({ bmi, setBmi }) {
  const [system, setSystem] = useState("metric"); // Stan do przechowywania wybranej wartości

  const [feet, setFeet] = useState(0);
  const [inches, setInches] = useState(0);
  const [stones, setStones] = useState(0);
  const [pounds, setPounds] = useState(0);
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);

  const [healthyWeight, setHealthyWeight] = useState("");

  const handleRadioChange = (event) => {
    setSystem(event.target.value);
    setBmi(0);
    // Aktualizacja stanu po zmianie przycisku radio
  };
  useEffect(() => {
    setBmi(((stones * 14 + +pounds) * 703) / Math.pow(feet * 12 + +inches, 2));
    const maxWeight = (25 * Math.pow(feet * 12 + +inches, 2)) / 703;
    const minWeight = (18.5 * Math.pow(feet * 12 + +inches, 2)) / 703;
    setHealthyWeight(
      ` ${1 * minWeight.toFixed(2)}lbs - ${1 * maxWeight.toFixed(2)}lbs`
    );
  }, [stones, feet, inches, pounds, setBmi]);

  useEffect(() => {
    setBmi(weight / Math.pow(height / 100, 2));
    const maxWeight = 25 * Math.pow(height / 100, 2);
    const minWeight = 18.5 * Math.pow(height / 100, 2);
    setHealthyWeight(
      ` ${1 * minWeight.toFixed(2).toString()}kg - ${1 * maxWeight.toFixed(2)}kg`
    );
  }, [weight, height, setBmi]);

  return (
    <div className="rounded-xl flex flex-col gap-7 bg-white p-7 shadow xl:w-1/2 xl:-mr-[250px] ">
      <h2 className="text-2xl font-semibold">Enter your details below</h2>
      <div className="flex flex-col gap-7">
        <form className="flex w-full">
          <span className="flex gap-4 w-1/2">
            <input
              className="w-8 h-8 border-2 border-blue-500 rounded-full cursor-pointer  "
              type="radio"
              name="system"
              value="metric"
              onChange={handleRadioChange}
              checked={system === "metric"} // Sprawdzenie, czy ten przycisk jest zaznaczony
            />
            <label className="font-semibold" htmlFor="metric">
              Metric
            </label>
          </span>
          <span className="flex gap-4 w-1/2">
            <input
              className="w-8  cursor-pointer"
              type="radio"
              name="system"
              value="imperial"
              onChange={handleRadioChange}
              checked={system === "imperial"} // Sprawdzenie, czy ten przycisk jest zaznaczony
            />
            <label className="font-semibold" htmlFor="imperial">
              Imperial
            </label>
          </span>
        </form>
        {system === "metric" ? (
          <InputField setHeight={setHeight} setWeight={setWeight} />
        ) : (
          <Imperial
            setFeet={setFeet}
            setInches={setInches}
            setPounds={setPounds}
            setStones={setStones}
          />
        )}
        {/* Przekazanie aktualnego systemu do InputField */}
        <Result bmi={bmi} healthyWeight={healthyWeight} />
        {/* Przekazanie aktualnego systemu do Result */}
      </div>
    </div>
  );
}

export default Input;
