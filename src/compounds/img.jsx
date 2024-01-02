export default function Img(pro) {
    return(
        <>
        {pro.data.map((i)=>{
            return(
                <img src={i.img} key={i.id}/>
            )
        })}
        </>
    )
}