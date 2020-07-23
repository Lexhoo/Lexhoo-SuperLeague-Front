import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoesServiceService {

  constructor(private HttpClient: HttpClient) { }



public getAllShoes(): Observable<any> {
  return this.HttpClient.get("http://localhost:8080/shoes");
}

public getshoesById(id): Observable<any>{
  return this.HttpClient.get("http://localhost:8080/shoes/${id}");
}

public postShoes(): Observable<any> {
  return this.HttpClient.delete("http://localhost:8080/newshoes");
}

public deleteShoes(id): Observable<any> {
  return this.HttpClient.delete("http://localhost:8080/deleteshoes/${id}");
}


}
