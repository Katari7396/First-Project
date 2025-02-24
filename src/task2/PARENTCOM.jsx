import Childcomponent from "./childcomponent";

const Parentcomponent = () => {
    const books = [
        {tittle:"Wuthering Heights 📔", author:"Emily Brontë", year: 1847},
        {tittle:"The Brothers Karamazov 📕", author:"Dostoevsky", year: 1880},
        {tittle:"War and Peace 📗", author:"Tolstoy", year: 1869},
        {tittle:"Moby-Dick 📙", author:"Herman Melville", year: 1851}
    ]
    return(
        <div>
            <h1>BOOK DETAILS</h1>
            {books.map((book,index) =>(
                <Childcomponent key={index} book={book}/>
            ))}
        </div>
    )
}
export default Parentcomponent;