import { Component } from "react";
import "./App.css"
import Data from "./compounds/data";
export default class AppClass extends Component{
 
  // code here
  render(){
    return(
      <>
    <h1 className="head">Kalvium gallery</h1>
    <div className="grid">
    <Data/>
    </div>
    </>
  )}

}
   
