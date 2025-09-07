const Notification = (props) => {
    if (!props.message) {
        return null
    }
    return (
        <div className={props.type} >
            {props.message}
        </div>
    )
}

export default Notification