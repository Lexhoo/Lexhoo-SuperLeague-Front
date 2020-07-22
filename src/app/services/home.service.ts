import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const GET_URL = 'http://localhost:8080/teams';
const GET_ID_URL = 'http://localhost:8080/teams/{id}';
const POST_URL = 'http://localhost:8080/post';
const PUT_URL = 'http://localhost:8080/put/{id}';
const DELETE_URL = 'http://localhost:8080/delete/{id}';
const DELETE_ALL_URL = 'http://localhost:8080/deleteall';
const PUBLISHED_URL = 'http://localhost:8080/published';


@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<any> {
    return this.httpClient.get(GET_URL);
  }

  get(id): Observable<any> {
    return this.httpClient.get(`${GET_ID_URL}/${id}`);
  }

  create(data): Observable<any> {
    return this.httpClient.post(POST_URL, data);
  }

  update(id, data): Observable<any> {
    return this.httpClient.put(`${PUT_URL}/${id}`, data);
  }

  delete(id): Observable<any> {
    return this.httpClient.delete(`${DELETE_URL}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.httpClient.delete(DELETE_ALL_URL);
  }

  findByTitle(city): Observable<any> {
    return this.httpClient.get(`${PUBLISHED_URL}?title=${city}`);
  }



}
