import React from 'react'
import { useStoreContext } from '../context/storeContext'
import ListItem from './ListItem'

export default function GlobalStateList() {
    const { user, setUser } = useStoreContext()

    return (
        <div>
            GlobalStateList
            <h1>{user.firstName} {user.lastName}</h1>
            <ListItem
                myData={['a', 'b', 'c', 'd']}
                name="My todo List"
                currentUser={user.firstName}
                changeUser={setUser}
            />
            <ListItem
                myData={['X', 'Y', 'Z']}
                name="Shop list"
                currentUser={user.firstName}
                changeUser={setUser}
            />
            <ListItem
                myData={['H', 'J', 'K']}
                name="Car List"
                currentUser={user.firstName}
                changeUser={setUser}
            />
        </div>
    )
}
