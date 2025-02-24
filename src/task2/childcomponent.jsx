import Grandchildcomponent from "./grandcomponent";
import './childcomponent.css'

const Childcomponent = ({book}) => {
    return(
        <div className="book">
            <p>TITTLE: {book.tittle}</p>
            <p>AUTHOR: {book.author}</p>
            <Grandchildcomponent year={book.year}/>
        </div>
    )
}

export default Childcomponent;