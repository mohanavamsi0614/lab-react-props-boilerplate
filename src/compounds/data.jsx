import elephant from "../images/elephant.jpeg"
// import App from "./App.jsx"
const Data = () => {
    let data = [
      {
        id: 1,
        img: elephant,
      },
      {
        id: 2,
        img: elephant,
      },
      {
        id: 3,
        img: elephant,
      },
      {
        id: 4,
        img: elephant,
      },
    ];
    return (
        data.map((i)=>{
            return(
            <img src={i.img} key={i.id}/>)
        })
    );
  };
  
export default Data;