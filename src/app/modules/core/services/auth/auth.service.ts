import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../../../environments/environment.prod';
import { LoginResponse } from 'src/app/models/login.model';
import { User } from 'src/app/models/user.model';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private userToken: string;
    private baseURL: String;

    constructor( private http: HttpClient ) {

        this.baseURL = environment.api_url;
        this.userToken = '';
        this.readToken();

    }

    logIn(user: any): any {
        return this.http.post<LoginResponse>(`${this.baseURL}/auth/login`, user)
                   .pipe(map(resp => {
                      this.saveToken(resp.token);
                      this.saveInfoUser(resp.user);
                      return resp;
                   }));
    }

    logOut(): void {
        localStorage.removeItem('token');
        localStorage.removeItem('userInfo');
        localStorage.removeItem('expires_in');
    }
    
    private saveToken(token: string):  void {
        this.userToken = token;
        localStorage.setItem('token', token);
        let currentDate = new Date();
        currentDate.setSeconds(14400);
        localStorage.setItem('expires_in', currentDate.getTime().toString());
    }

    private saveInfoUser(user: User): void {
        const userInfo = {
            name: user.name,
            email: user.email,
            image: user.image
        };
        localStorage.setItem('userInfo', JSON.stringify(userInfo));
    }

    private readToken(): void {
        if(localStorage.getItem('token')) {
            this.userToken = localStorage.getItem('token') || '';
        } else {
            this.userToken = '';
        }
    }

    isAuthenticated(): boolean {
        if(this.userToken.length < 2) {
            return false;
        } else {
            const expires_in = Number(localStorage.getItem('expires_in'));
            const expiresDate = new Date();
            expiresDate.setTime(expires_in);
            if(expiresDate > new Date()) {
                return true;
            } else {
                return false;
            }
        }
    }

    getUserToken(): string {
        return this.userToken;
    }

}