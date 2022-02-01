const modyDick = require("../assets/DummyBooksCovers/ModyDick.jpg")
const book1984 = require("../assets/DummyBooksCovers/1984.jpg")
const coldStartProblem = require("../assets/DummyBooksCovers/ColdStartProblem.jpg")
const harryPotter = require("../assets/DummyBooksCovers/HarryPotter.jpg")
const LordOfTheFlies = require("../assets/DummyBooksCovers/LordOfTheFlies.jpg")
const VeryNice = require("../assets/DummyBooksCovers/VeryNice.jpg")
const ZeroToOne = require("../assets/DummyBooksCovers/zeroToOne.jpg")
const WizardOfOz = require("../assets/DummyBooksCovers/WizardOfOz.jpeg")


const books = [
    {
        id: 1,
        title: "The Wizard Of Oz",
        author: "dsjflkdasf",
        cover: WizardOfOz,
        summary: "dsjflkdasf",
        ISBN: "dsjflkdasf",
        pageCount: "154",
        language: "en",
        inProgress: true,
        finished: false,
        toRead: false,
    },
    {
        id: 2,
        title: "Mody Dick",
        author: "dsjflkdasf",
        cover: modyDick,
        summary: "dsjflkdasf",
        ISBN: "dsjflkdasf",
        pageCount: "154",
        language: "en",
        inProgress: true,
        finished: false,
        toRead: false,
    },
    {
        id: 3,
        title: "1984",
        author: "dsjflkdasf",
        cover: book1984,
        summary: "dsjflkdasf",
        ISBN: "dsjflkdasf",
        pageCount: "154",
        language: "en",
        inProgress: false,
        finished: false,
        toRead: true,
    },
    {
        id: 4,
        title: "The Cold Start Problem",
        author: "dsjflkdasf",
        cover: coldStartProblem,
        summary: "dsjflkdasf",
        ISBN: "dsjflkdasf",
        pageCount: "154",
        language: "en",
        inProgress: true,
        finished: false,
        toRead: false,
    },
    {
        id: 5,
        title: "Harry Potter and the Deathly Hallows",
        author: "dsjflkdasf",
        cover: harryPotter,
        summary: "dsjflkdasf",
        ISBN: "dsjflkdasf",
        pageCount: "154",
        language: "en",
        inProgress: false,
        finished: false,
        toRead: true,
    },
    {
        id: 6,
        title: "Lord of the Flies",
        author: "dsjflkdasf",
        cover: LordOfTheFlies,
        summary: "dsjflkdasf",
        ISBN: "dsjflkdasf",
        pageCount: "154",
        language: "en",
        inProgress: false,
        finished: true,
        toRead: false,
    },
    {
        id: 7,
        title: "Very Nice",
        author: "dsjflkdasf",
        cover: VeryNice,
        summary: "dsjflkdasf",
        ISBN: "dsjflkdasf",
        pageCount: "154",
        language: "en",
        inProgress: false,
        finished: false,
        toRead: true,
    },
    {
        id: 8,
        title: "Zero To One",
        author: "dsjflkdasf",
        cover: ZeroToOne,
        summary: "dsjflkdasf",
        ISBN: "dsjflkdasf",
        pageCount: "154",
        language: "en",
        inProgress: false,
        finished: true,
        toRead: false,
    }
]

const inProgressBooks = books.filter(book => {
    return book.inProgress;
})

const toReadBooks = books.filter(book => {
    return book.toRead;
})

const finishedBooks = books.filter(book => {
    return book.finished;
})

const bookData = [
    {
        header: "in progress",
        data: inProgressBooks,
        id: 1
    },
    {
        header: "to read",
        data: toReadBooks,
        id: 2
    },
    {
        header: "finished",
        data: finishedBooks,
        id: 3
    },
]




export default bookData;
