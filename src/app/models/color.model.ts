export interface ColorResponse {
    total:  number;
    colors: Color[];
}

export interface Color {
    _id:  string;
    name: string;
}
