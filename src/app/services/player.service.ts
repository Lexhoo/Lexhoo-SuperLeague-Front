import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  constructor(private HttpClient: HttpClient) { }



  public getAllPlayers(): Observable<any> {
    return this.HttpClient.get("http://localhost:8080/player");
  }

  public getPlayersById(id): Observable<any>{
    return this.HttpClient.get("http://localhost:8080/player/${id}");
  }

  // public CreatePlayers(): Observable<any> {
  //   return this.HttpClient.delete("http://localhost:8080/newplayer");
  // }

  create(data) {
    return this.HttpClient.post("http://localhost:8080/newplayer", data);
  }
  public deletePlayers(id): Observable<any> {
    return this.HttpClient.delete("http://localhost:8080/deleteplayer/${id}");
  }

}
