import React, {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  MouseEvent,
} from "react";

import "./Button.scss";

interface Props {
  label: string;
  operation?: true;
  double?: true;
  triple?: true;
  click?: (label: string) => void;
  // size?: "double" | "triple";
}

const Button = ({ label, operation, double, triple, click }: Props) => {
  return (
    <button
      type="button"
      onClick={() => click && click(label)}
      className={`
    button
    ${operation ? "operation" : ""}
    ${double ? "double" : ""}
    ${triple ? "triple" : ""}
  `}
    >
      {label}
    </button>
  );
};

export default Button;
