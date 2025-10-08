const Filter = (props) => (
  <div>
    filter  <input value={props.search} onChange={props.handleSearch} />
  </div>
)
export default Filter