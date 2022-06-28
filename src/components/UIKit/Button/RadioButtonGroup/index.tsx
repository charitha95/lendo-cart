import React from "react";
import classNames from "./style.module.scss";

type RadioButtonGroupProps = {
  name: string;
  options: string[];
};

function RadioButtonGroup({ name, options }: RadioButtonGroupProps) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {};

  return (
    <div onChange={handleRadioChange} className={classNames["radio-group"]}>
      <p className={classNames.title}>{name}</p>
      {options.map((option) => (
        <label key={`${option}`}>
          <input type="radio" value="Male" name={name} /> {option}
        </label>
      ))}
    </div>
  );
}

export default RadioButtonGroup;
