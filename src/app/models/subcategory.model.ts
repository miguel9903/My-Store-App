export interface SubcategoryResponse {
    total:         number;
    subcategories: Subcategory[];
}

export interface Subcategory {
    _id:  string;
    name: string;
    user: User;
}

export interface User {
    _id:  string;
    name: string;
}
