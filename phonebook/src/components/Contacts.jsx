import Contact from "./Contact"

const Contacts = (props) => (
  <div className="list">
    {props.toShow.map(person => 
      <Contact 
        key={person.id} id={person.id} name={person.name} number={person.number} 
        deletePerson={props.deletePerson} updatePerson={props.updatePerson}
      />)}
  </div>
)

export default Contacts