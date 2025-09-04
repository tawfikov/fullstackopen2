const Contact = (props) => (
  <div>
    {props.name} ... {props.number}
  </div>
)

const Contacts = (props) => (
  <div>
    {props.toShow.map(person => <Contact key={person.id} name={person.name} number={person.number} />)}
  </div>
)

export default Contacts