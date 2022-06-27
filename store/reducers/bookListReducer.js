import { ADD_BOOK, DELETE_BOOK, START_READING, FINISH_READING, ADD_CATEGORY, DELETE_CATEGORY } from "../actions/types";
import AsyncStorage from '@react-native-async-storage/async-storage';




const initalState = {
    bookshelf: []
}

const getData = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem('bookshelf');
        return jsonValue != null ? JSON.parse(jsonValue) : initalState;
    } catch(e) {
        // error reading value
        console.log(e);
    }
}





const bookReducer = (state = initalState, action) => {
    switch(action.type) {
        case ADD_BOOK:
            if(action.data.volumeInfo.categories !== undefined){
                return {
                    ...state,
                    bookshelf: state.bookshelf.concat({
                        id: action.data.id,
                        book: action.data,
                        inProgress: false,
                        finished: false,
                        categories: [action.data.volumeInfo.categories[0]],
                        })
                }
            } else {
                return {
                    ...state,
                    bookshelf: state.bookshelf.concat({
                        id: action.data.id,
                        book: action.data,
                        inProgress: false,
                        finished: false,
                        categories: [],
                        })
                }
            }
        case DELETE_BOOK:
            return {
                ...state,
                bookshelf: state.bookshelf.filter((item) => 
                    item.id !== action.id
                )
            }
        case START_READING:
            return {
                ...state,
                bookshelf: state.bookshelf.map(book => {
                    if(book.id == action.book.id) {
                        return {...book, inProgress: true};
                    }
                    return book;
                })
            }
        case FINISH_READING:
            return {
                ...state,
                bookshelf: state.bookshelf.map(book => {
                        if(book.id == action.book.id) {
                            return {...book, inProgress: false, finished: true};
                        }
                        return book;
                    })
                }
        case ADD_CATEGORY:
            return;
        case DELETE_CATEGORY:
            return;
        default:
            return state;
    }
}


export default bookReducer;