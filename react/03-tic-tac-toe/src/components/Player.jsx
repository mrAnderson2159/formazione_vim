import { useState } from "react";
import { keyEnter } from "../utils/keyEnter";

export default function Player({ name, symbol }) {
    const [playerName, setPlayerName] = useState(name);
    const [editing, setEditing] = useState(false);

    const toggleEditing = () => {
        // ❌ setEditing(!editing); SBAGLIATO! Perché:
        // - React aggiorna lo stato in modo asincrono e batchato.
        // - Se ci sono più aggiornamenti ravvicinati, `editing` potrebbe
        //   non essere aggiornato immediatamente, causando bug.
        // - Usiamo la funzione di aggiornamento per garantire che il nuovo
        //   stato sia basato sul valore più recente.
        setEditing((prev) => !prev);
    };

    const handleInput = (e) => setPlayerName(e.target.value);

    const buttonText = editing ? "Save" : "Edit";

    let nameField = <span className="player-name">{playerName}</span>;

    if (editing) {
        nameField = (
            <input
                type="text"
                value={playerName}
                onChange={handleInput}
                onKeyUp={(e) => keyEnter(e, toggleEditing)}
                required
                autoFocus
            />
        );
    }

    return (
        <li>
            <span className="player">
                {nameField}
                <span className="player-symbol">{symbol}</span>
                <button onClick={toggleEditing}>{buttonText}</button>
            </span>
        </li>
    );
}
