import React from "react";
import classNames from "./style.module.scss";

type RadioButtonGroupProps = {
  name: string;
  options: string[] | number[];
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function RadioButtonGroup({ name, options, onChange }: RadioButtonGroupProps) {
  return (
    <div onChange={onChange} className={classNames["radio-group"]}>
      <p className={classNames.title}>{name}</p>
      {options.map((option) => (
        <label key={`${option}`} data-testid={`radio-group-${name}-${option}`}>
          <input type="radio" value={option} name={name} /> {option}
        </label>
      ))}
    </div>
  );
}

export default RadioButtonGroup;
