import React from "react";

export default function Types_Medicines(props) {
  return (
    <div>
        <button type="button" className="btn btn-warning mx-3">{props.name1}</button>
        <button type="button" className="btn btn-warning mx-3">{props.name2}</button>
        <button type="button" className="btn btn-warning mx-3">{props.name3}</button>
        <button type="button" className="btn btn-warning mx-3">{props.name4}</button>
        <button type="button" className="btn btn-warning mx-3">{props.name5}</button> 
    </div>
  )
}
