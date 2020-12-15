import React from "react";
import styled from "styled-components";

export default function Switch({ gender, handleChangeGender }) {
  function handleChange() {
    if (gender === "m") {
      handleChangeGender("f");
      localStorage.setItem("GenderValue", "f");
    } else {
      handleChangeGender("m");
      localStorage.setItem("GenderValue", "m");
    }
  }

  return (
    <CheckBoxWrapper>
      <CheckBox
        type="checkbox"
        id="checkbox1"
        checked={gender === "m"}
        onChange={handleChange}
      />
      <CheckBoxLabel htmlFor="checkbox1" />
    </CheckBoxWrapper>
  );
}

const CheckBoxWrapper = styled.div`
  position: relative;
  margin-bottom: 1em;
  margin-top: 2em;
`;
const CheckBoxLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 68px;
  height: 40px;
  border-radius: 15px;
  background: rgba(120, 120, 120, 0.96);
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 32px;
    height: 32px;
    margin: 3px;
    background: rgba(256, 256, 256, 0.96);
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;
const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 68px;
  height: 40px;
  &:checked + ${CheckBoxLabel} {
    background: rgba(34, 34, 34, 0.96);
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 32px;
      height: 32px;
      margin-left: 34px;
      transition: 0.2s;
    }
  }
`;
