export const book = {
    title: "Safe Skies Archer",
    author: "Gwy Saludes",
    year: 2024,
    getBookLabel() {
        return `${this.title} by ${this.author} (${this.year})`;
    }
};

export function formatBook(book, status) {
    return `Title: ${book.title} | Author: ${book.author} | Year: ${book.year} | Status: ${status}`
}