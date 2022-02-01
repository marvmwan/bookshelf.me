import { ADD_BOOK, DELETE_BOOK, START_READING, FINISH_READING, ADD_CATEGORY, DELETE_CATEGORY } from "../actions/types";


const initalState = {
    bookshelf: []
}


const bookReducer = (state = initalState, action) => {
    switch(action.type) {
        case ADD_BOOK:
            return {
                ...state,
                bookshelf: state.bookshelf.concat({
                    key: Math.random(),
                    book:action.data,
                    inProgress: false,
                    finished: false
                })
            }
        case DELETE_BOOK:
            return {
                    ...state,
                    bookshelf: state.bookshelf.filter((item) => {
                        item.key !== action.key
                    })
            }
        case START_READING:
            return;
        case FINISH_READING:
            return;
        case ADD_CATEGORY:
            return;
        case DELETE_CATEGORY:
            return;
        default:
            return state;
    }
}


export default bookReducer;