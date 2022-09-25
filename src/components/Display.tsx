import React from "react";

import "./Display.scss";

interface Props {
  value: number;
}

const Display = ({ value }: Props) => {
  return <div className="display">{value}</div>;
};

export default Display;
