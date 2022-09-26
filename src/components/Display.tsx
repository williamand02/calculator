import React from "react";

import "./Display.scss";

interface Props {
  value: string;
}

const Display = ({ value }: Props) => {
  return <div className="display">{value}</div>;
};

export default Display;
