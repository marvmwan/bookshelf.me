import { ADD_BOOK, DELETE_BOOK, START_READING, FINISH_READING, ADD_CATEGORY, DELETE_CATEGORY } from "./types";

export const addBook = (book) => {
    return (
        {
            type: ADD_BOOK,
            data: book
        }
    )
}

export const deleteBook = (key) => {
    return (
        {
            type: DELETE_BOOK,
            key: key
        }
    )
}

export const startBook = (key) => {
    return (
        {
            type: START_READING,
            key: key
        }
    )
}

export const finishBook = (key) => {
    return (
        {
            type: FINISH_READING,
            key: key
        }
    )
}

export const addCategory = (category) => {
    return (
        {
            type: ADD_CATEGORY,
            category: category
        }
    )
}

export const deleteCategory = (category) => {
    return (
        {
            type: DELETE_CATEGORY,
            category: category
        }
    )
}