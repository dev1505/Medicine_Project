// import { useState } from "react"
import React from "react";
import "./Textarea.css";
import SearchIcon from '@mui/icons-material/Search';

export default function Textarea(props) {
  // const [text,setText] = useState("");
  // const Uppercase_converter = () =>{
  //   let new_text = text.toUpperCase();
  //   setText(new_text);
  // }

  // const Lowercase_converter = () =>{
  //   let new_text = text.toLowerCase();
  //   setText(new_text);
  // }

  // const Onchange = (event) =>{
  //   setText(event.target.value)
  // }
  // // setText();
  return (
    <div className="wholediv2">
      
      <div className="textarea_item_style">
        Search
      </div>
      <div className="textarea_item_style">
        <input type="text" placeholder="Enter Here" />
        {/* <textarea className="form-control" value={text} id="myrow" rows="1" cols="100" onChange={Onchange} placeholder="Enter Value Here"></textarea> */}
      </div>
      <div className="searchicon_item_style">
        <SearchIcon className="searchicon_style"/>
      </div>
      

    </div>
  );
}
