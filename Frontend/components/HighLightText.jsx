import React from "react";

const HighlightText = ({text}) => {
  return (
    <span style={{fontfamily: 'Playfair Display' , color:'#084C98'}}>
      {" "}
      {text}
    </span>
  );
};

export default HighlightText;
