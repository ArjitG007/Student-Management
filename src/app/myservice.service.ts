import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor(private http: HttpClient) { }

  // get student/ Show student
  showStudent() {
    return this.http.get<any>('http://localhost:3000/posts')
      .pipe(map(res => {
        return res;
      }))
  }

  // add Student
  postStudent(data: any) {
    return this.http.post<any>('http://localhost:3000/posts', data)
      .pipe(map(res => {
        return res;
      }))
  }

  // update Student

  updateStudent(data: any, id: number) {
    return this.http.put<any>('http://localhost:3000/posts/' + id, data)
      .pipe(map(res => {
        return res;
      }))
  }

  // delete Student

  deleteStudent(id: number) {
    return this.http.delete<any>('http://localhost:3000/posts/' + id)
      .pipe(map(res => {
        return res;
      }))
  }
}
