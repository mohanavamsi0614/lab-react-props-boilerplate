import { Component } from "react";
import "./App.css"
import Data from "./compounds/data";
import Img from "./compounds/img";
export default class AppClass extends Component{
 
  // code here
  render(){
    return(
      <>
    <h1 className="head">Kalvium gallery</h1>
    <div className="grid">
    <Img data={Data}/>
    </div>
    </>
  )}

}
   
