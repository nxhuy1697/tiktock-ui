import React from "react";
import { Link } from "react-router-dom";

export default function Buttons({
  to,
  href,
  children,
  text = false,
  primary = false,
  outline = false,
  btnSmall = false,
  btnLarge = false,
  onClick,
}) {
  let Comp = "button";
  const props = {
    onClick,
  };

  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = "a";
  }

  const classes = `pack 
  ${text ? "text" : ""} 
  ${primary ? "primary" : ""} 
  ${outline ? "outline" : ""}
  ${btnSmall? "btnSmall" : ""}
  ${btnLarge? "btnLarge" : ""}
  `;

  return (
    <>
      <div>
        <Comp className={classes} {...props}>
          <span>{children} </span>
        </Comp>
      </div>
    </>
  );
}
