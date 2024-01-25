import React  from "react";

export default function Alerts(props) {

   
  return (
    <div className="container my-3">
    {props.alert && <div className="alert alert-warning alert-dismissible fade show" role="alert">
      <strong>{props.alert.type}</strong>: {props.alert.message}
    </div>}
    </div>
  );
}
