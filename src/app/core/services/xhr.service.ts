import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpEvent, HttpEventType } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class XhrService {
  baseUrl: string = "./assets/data/";

  constructor(private http: HttpClient) { }

  call(url): Observable<any> {
    const finalURL = `${this.baseUrl}${url}`;
    return new Observable((observer) => {
      this.http.get(finalURL).subscribe((data) => {
        observer.next(data);
      }, (error) => {
        observer.error(error);
      });
    });
  }
}