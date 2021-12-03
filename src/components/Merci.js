import React,{ useState}  from 'react';
import {useParams} from 'react-router-dom'

export default function Merci() {
    const {name} = useParams();
    const[newName, setNewName] = useState(name);

    return (
        <div className="thank-you-container">
            <h1>Merci {newName} pour votre inscription!</h1>
            <input className="user-input" type="text" name='nouveau nom' value={newName} onChange={(e) => setNewName(e.target.value)}/>
        </div>
    )
}

