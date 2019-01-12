import React from "react";
import If from "../helpers/if";

const IconButton = props => {
  return (
    <If test={!props.hide}>
      <button className={`btn btn-${props.styles}`} onClick={props.onClick}>
        <i className={`fa fa-${props.icon}`} />
      </button>
    </If>
  );
};

export default IconButton;
