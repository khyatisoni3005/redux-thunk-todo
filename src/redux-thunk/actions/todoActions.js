import axios from "axios"
import { DELETE_PRODUCT, EMPTY_ID, GET_PRODUCTS, POST_PRODUCT, SEARCH_TODOS, UPDATE_PRODUCT, VIEW_PRODUCT } from "../type"

export const getTodoList = () => {
    return (dispatch) => {
        axios.get("http://localhost:5000/api/todo/list")
            .then((res) => {
                dispatch({
                    type: GET_PRODUCTS,
                    payload: res.data

                })
            })
    }
}

export const addTodoData = (todoData) => {
    return (dispatch) => {
        axios.post("http://localhost:5000/api/todo/create", todoData)
            .then((res) => {
                dispatch({
                    type: POST_PRODUCT,
                    payload: res.data

                })
            })
    }
}

export const deleteTodoData = (id) => {
    return (dispatch) => {
        axios.delete(`http://localhost:5000/api/todo/delete/${id}`)
            .then((res) => {
                dispatch({
                    type: DELETE_PRODUCT,
                    payload: id

                })
            })
    }
}

export const viewTodoData = (id) => {
    return {
        type: VIEW_PRODUCT,
        payload: id
    }
}

export const updateTodoData = (todoData) => {
    return (dispatch) => {
        axios.put(`http://localhost:5000/api/todo/update/${todoData._id}`, todoData)
            .then((res) => {
                dispatch({
                    type: UPDATE_PRODUCT,
                    payload: res.data

                })
            })
    }
}


export const emptyViewId = () => {
    return (dispatch) => {
        dispatch({
            type: EMPTY_ID,
            payload: ""
        })
    }
}
export const searchTodos = (todo) => {

    console.log(todo, "action");
    return (dispatch) => {
        axios.get(`http://localhost:5000/api/todo/search?keyword=${todo}`)
            .then((res) => {
                console.log(res.data, "redsas");
                dispatch({
                    type: SEARCH_TODOS,
                    payload: res.data

                })
            })
    }
}