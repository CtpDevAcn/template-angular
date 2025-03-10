import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
  }

  login(req: {username: string, password: string}) {
    return this.http.post('http://localhost:3000/api/v1/auth/login', req);
  }
}
