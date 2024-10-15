// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Group389Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 32 32"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M13.172 1.172a4 4 0 015.656 0l12 12a4 4 0 010 5.656l-12 12a4 4 0 01-5.656 0l-12-12a4 4 0 010-5.656l12-12zM9.657 16L16 22.343 22.343 16 16 9.657 9.657 16z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group389Icon;
/* prettier-ignore-end */
