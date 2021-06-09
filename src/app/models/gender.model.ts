export interface GenderResponse {
    total:   number;
    genders: Gender[];
}

export interface Gender {
    _id:  string;
    name: string;
}
