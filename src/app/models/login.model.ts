export interface LoginResponse {
    user:  User;
    token: string;
}

export interface User {
    role:   string;
    google: boolean;
    name:   string;
    email:  string;
    image:  string;
    uid:    string;
}
