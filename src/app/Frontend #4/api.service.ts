import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Show } from '../show';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiURL:string = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) { }

//   public createShow<show>(artistData) {
//     return this.httpClient.post<show>(`${this.apiURL}/show/`,artistData);
//   }

//   public deleteArtist(name: string) {
//     return this.httpClient.delete(`${this.apiURL}/artist/${name}`);
// }

  public getShow(): Observable<Show[]> {
    return this.httpClient.get<Show[]>(`${this.apiURL}/spectacle`);
  }
}
