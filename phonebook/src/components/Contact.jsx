import { useState } from "react"

const Contact = (props) => {
    const [isEditing, setIsEditing] = useState(false)
    const [editedName,setEditedName] = useState(props.name)
    const [editedNumber, setEditedNumber] = useState(props.number)

    const handleSave = () => {
        props.updatePerson(props.id, { name: editedName, number: editedNumber })
        setIsEditing(false)
    }

    const handleCancel = () => {
        setEditedName(props.name)
        setEditedNumber(props.number)
        setIsEditing(false)
    }


    return (
        <div className="item">
        {isEditing? (
            <>
            <input type="text" value={editedName}  onChange={(e) => setEditedName(e.target.value)} />
            <input type="text" value={editedNumber} onChange={e => setEditedNumber(e.target.value)} />
            <button onClick={handleCancel}>Cancel</button>
            <button onClick={handleSave}>Save</button>
            </> 
        ) : (
        
            <>
            <span className="name">{props.name}</span>
            <span className="number">{props.number}</span>
            <button onClick={()=>setIsEditing(true)}>Edit</button>
            <button className="delete" onClick={()=> props.deletePerson(props.id)}>Delete</button>
            </>
        )}
        </div>
    )
}

export default Contact