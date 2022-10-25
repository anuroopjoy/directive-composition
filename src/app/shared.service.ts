import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private sendData$ = new Subject<any>();
  public onSendData$: Observable<any>;

  constructor(private http: HttpClient) {
    this.onSendData$ = this.sendData$.asObservable();
  }

  public getData() {
    // return this.http.get('https://jsonplaceholder.typicode.com/todos/1');
    this.http
      .get('https://jsonplaceholder.typicode.com/todos/1')
      .subscribe((data) => {
        this.sendData$.next(data);
      });
  }

  sendData(data: any) {
    this.sendData$.next(data);
  }
}
