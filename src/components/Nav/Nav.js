import React from "react";

export default function Nav(props) {
  if (props.location.pathname === "/") {
    return null;
  } else {
    return (
      <div style={{display:'flex',flexDirection:'column'}}>
        <h2>Nav</h2>
        <a href='/dashboard'>Home</a>
        <a href='/new'>Form</a>
        <a href='/' >Log Out</a>
      </div>
    );
  }
}
