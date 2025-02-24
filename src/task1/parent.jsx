import Child from "./child";

const Parent = () => {

    const me = {name:"katari", age: 25, address: "kakinada"}
    
    return(
        <div>
            <h1>MY INFORMATION</h1>
            <Child me={me}/>
        </div>
    )
}
export default Parent;