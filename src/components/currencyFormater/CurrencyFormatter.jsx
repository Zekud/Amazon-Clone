import React from "react";
import numeral from "numeral";
function CurrencyFormatter({ amount }) {
  const format = numeral(amount).format("$0,0.00");
  return <div>{format}</div>;
}

export default CurrencyFormatter;
