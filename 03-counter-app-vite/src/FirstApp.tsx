// type objType ={
//     h1:string,
//     p:string
// }

// const obj : objType = {
//     h1: "Mi primer componente",
//     p: "Párrafo"
// }

const getText = (text: string) : string => {
    return text;
}

export const FirstApp : React.FC<Iprops> = ({title = "title null", p = "p null"} : Iprops) =>{
    return(
    <>
        <h1>{ getText(title)}</h1>
        <p>{ getText(p)}</p>
    </>
    )
}

interface Iprops {
    title? : string,
    p?: string
}