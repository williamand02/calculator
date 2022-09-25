import React from "react";

import "./Button.scss";

interface Props {
  label: string;
}

const Button = ({ label }: Props) => {
  return <button className="button">{label}</button>;
};

export default Button;
