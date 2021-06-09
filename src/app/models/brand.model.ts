export interface BrandResponse {
    total:  number;
    brands: Brand[];
}

export interface Brand {
    _id:  string;
    name: string;
}
