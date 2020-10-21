import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../model/user';
@Injectable({
  providedIn: 'root'
})
export class FormService {
  private constructor(private http: HttpClient) { }

  public add(user: User) {
    return this.http.post(`https://video-editor-vn.herokuapp.com/api/info`, user);
  }
   
}
