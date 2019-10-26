import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private dataUrl = `api/items`;

  constructor(private http: HttpClient) {}

  public getItems(): Observable<any[]> {
    return this.http.get<any[]>(this.dataUrl);
  }

}
