
export type Book = {
    _id: string,
    en: string,
    ua: string,
    category: string,
    isIrregular: boolean,
    owner: string,
    progress: number,
}


export type UserBooks = {
    result: Book[],
    totalPages: number,
    page: number,
    perPage: number,
}