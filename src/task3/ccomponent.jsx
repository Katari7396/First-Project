const Ccomponent=({contacts}) => {
    return(
        <div style={{display: 'grid', gap:'10px'}}>
             {contacts.map((contact, index) => (
        <div key={index} style={{ border: '2px solid black', padding: '8px' }}>
          <h4>{contact.name}</h4>
          <p>Phone: {contact.number}</p>
          <p>Email: {contact.email}</p>
        </div>
      ))}
        </div>
    )
}
export default Ccomponent;