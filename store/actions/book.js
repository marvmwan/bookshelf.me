import { ADD_BOOK, DELETE_BOOK, START_READING, FINISH_READING, ADD_CATEGORY, DELETE_CATEGORY } from "./types";

export const addBook = (book) => {
    return (
        {
            type: ADD_BOOK,
            data: book
        }
    )
}

export const deleteBook = (id) => {
    return (
        {
            type: DELETE_BOOK,
            id: id
        }
    )
}

export const startBook = (book) => {
    return (
        {
            type: START_READING,
            book: book
        }
    )
}

export const finishBook = (book) => {
    return (
        {
            type: FINISH_READING,
            book: book
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