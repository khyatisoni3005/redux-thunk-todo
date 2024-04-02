import React from 'react'
import TodoList from './TodoList'
import TodoModal from './TodoModal'



function Home() {
    return (
        <>

            <TodoModal />
            <TodoList />
        </>
    )
}

export default Home