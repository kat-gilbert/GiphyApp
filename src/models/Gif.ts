export interface Gifs {
    data: Data[]
}

export interface Data {
    title: string,
    images: {
        fixed_height: {
            url: string
        }
    }
    url: string,
}
