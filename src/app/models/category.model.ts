export interface CategoryResponse {
    total:      number;
    categories: Category[];
}

export interface Category {
    subcategories: Subcategory[];
    _id:           string;
    name:          string;
    user:          User;
}

export interface User {
    _id:  string;
    name: string;
}

export interface Subcategory {
    _id:  string;
    name: string;
}
