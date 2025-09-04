const Form = (props) => (
  <div>
    <h2>add new</h2>
      <form onSubmit={props.addName}>
        <div>
          name: <input value={props.newName} onChange={props.handleNewNames} />
        </div>
        <div>
          number: <input value={props.newNumber} onChange={props.handleNewNumbers} />
          </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
  </div>
)
export default Form