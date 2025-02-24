import Grandchild from "./grandchild";
import './child.css';

const Child = ({me}) => {
    return(
        <div className="child">
            <p>NAME: {me.name}</p>
            <p>AGE: {me.age}</p>
            <Grandchild address={me.address}/>
        </div>
    )
}
export default Child;