export interface SearchResponse {
    total:   number;
    results: Result[];
}

export interface Result {
    _id:  string;
    name: string;
}
