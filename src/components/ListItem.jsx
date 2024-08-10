import React from 'react'

export default function ListItem({ myData, name, currentUser, changeUser }) {
    return (
        <div>
            <h1>{name} | {currentUser}</h1>
            <ul>
                {
                    myData.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))
                }
            </ul>
            <button onClick={() => changeUser(name)}>Change User Name</button>
            <hr />
        </div>
    )
}
