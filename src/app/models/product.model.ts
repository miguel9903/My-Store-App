export interface ProductResponse {
    total:    number;
    products: Product[];
}

export interface Product {
    _id:         string;
    name:        string;
    description: string;
    price:       number;
    color:       Color[];
    brand:       Brand;
    gender:      Gender;
    subcategory: Subcategory;
    available:   boolean;
    image:       string;
}

export interface Brand {
    _id:  string;
    name: string;
}

export interface Color {
    _id:  string;
    name: string;
}

export interface Gender {
    _id:  string;
    name: string;
}

export interface Subcategory {
    _id:  string;
    name: string;
}
