import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment.prod';

// Models
import { AuthService } from '../auth/auth.service';
import { SearchResponse } from 'src/app/models/search.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private baseURL: String;

  httpOptions = {
    headers: new HttpHeaders({
     'Content-type': 'application/json; charset=UTF-8',
     'x-token': this.authService.getUserToken()
    })
  }

  constructor( private http: HttpClient,
               private authService: AuthService ) { 

    this.baseURL = environment.api_url;

  }

  // ----------------- Models ----------------- //

  getModels(collection: string): any {
    return this.http.get(`${this.baseURL}/${collection}?start=0&limit=50`);
  }

  getModel(collection: string, id: string): any {
    return this.http.get(`${this.baseURL}/${collection}/${id}`);
  }

  createModel(collection: string, modelData: any): any {
    return this.http.post(`${this.baseURL}/${collection}`, modelData, this.httpOptions);
  }

  updateModel(collection: string, id: string, modelData: any): any {
    return this.http.put(`${this.baseURL}/${collection}/${id}`, modelData, this.httpOptions);
  }

  deleteModel(collection: string, id: string): any {
    return this.http.delete(`${this.baseURL}/${collection}/${id}`, this.httpOptions);
  }
    
  // ----------------- Search ----------------- //
  search(collection: string, term: string): Observable<SearchResponse> {
    return this.http.get<SearchResponse>(`${this.baseURL}/search/${collection}/${term}`);
  }

  // ----------------- Update Image ----------------- //
  updateImage(collection: string, id: string, file: any): any {
    return this.http.put(`${this.baseURL}/uploads/${collection}/${id}`, file);
  }
}
