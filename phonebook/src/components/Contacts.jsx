const Contact = (props) => (
  <div>
    {props.name} ... {props.number}
    <button onClick={()=> props.deletePerson(props.id)}>Delete</button>
  </div>
)

const Contacts = (props) => (
  <div>
    {props.toShow.map(person => 
      <Contact 
        key={person.id} id={person.id} name={person.name} number={person.number} deletePerson={props.deletePerson}
      />)}
  </div>
)

export default Contacts