import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  constructor(private http:HttpClient) { }

  getBeers(): Observable<any>{
    return this.http.get("http://localhost:8080/beers");
  }

  addSale(data:any): any{
    console.log(data);
    return this.http.post("http://localhost:8080/sales", data).subscribe(e => console.log(e));
  }

  getSales(): Observable<any>{
    return this.http.get("http://localhost:8080/sales");
  }

  getPhotos(): Observable<any>{
    return this.http.get("http://localhost:8080/photos");
  }

  getVideo(): Observable<any>{
    return this.http.get("http://localhost:8080/video");
  }
}
