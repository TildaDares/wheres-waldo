import React from "react";
import location from "../../assets/images/placeholder.svg";

const Marker = (props) => {
  const styles = {
    width: "20px",
    position: "absolute",
    display: "none",
    marginLeft: "-10px",
    marginTop: "-10px",
  };

  return (
    <div style={styles} ref={props.markerRef} id={props.mid}>
      <img src={location} />
    </div>
  );
};

export default Marker;
