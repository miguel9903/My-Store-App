export interface UserResponse {
    total: number;
    users: User[];
}

export interface User {
    role:   string;
    google: boolean;
    name:   string;
    email:  string;
    image?: string;
    uid:    string;
}

