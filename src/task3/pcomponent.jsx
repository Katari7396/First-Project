import Ccomponent from "./ccomponent";

const Pcomponent =() => {

    const contacts = [
        {name:"Katari", number:"123456777", email:"katari123@gmail.com"},
        {name:"Hari", number:"8987866535", email:"hari234@gmail.com"},
        {name:"Teja", number:"3467674333", email:"teja23@gmail.com"},
        {name:"Anwar", number:"7665454321", email:"anwar453@gmail.com"}
    ]
    return(
        <div>
            <h1>CONTACT LIST</h1>
            <Ccomponent contacts={contacts}/>
        </div>
    )
}
export default Pcomponent;