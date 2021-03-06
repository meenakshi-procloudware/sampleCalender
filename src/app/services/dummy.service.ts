import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DummyService {

  constructor(private http: HttpClient) { }

  getEvents() {
    return this.http.get('http://localhost:3000/data')
      .toPromise()
      .then((res: any) => <any[]> res.data)
      .then(data => { return data; });
  }
}
