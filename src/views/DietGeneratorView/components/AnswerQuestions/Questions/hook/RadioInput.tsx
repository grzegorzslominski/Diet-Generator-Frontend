import React from "react";

interface props {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  value: string;
  id: string;
  checkVal: string;
  inputName: string

}
const RadioInput = ({handleChange,name,value,id,checkVal,inputName}: props) => {
  return (
    <>
    <input type="radio"
           id={id}
           name={name}
           value={value}
           checked={value === checkVal}
           onChange={handleChange}
    />
      <label htmlFor="{id}"/>
    </>
  );
};

export default RadioInput;