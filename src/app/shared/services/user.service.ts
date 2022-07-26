import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { User } from '../models/user.models';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  AddUser(user: User) :Observable<boolean>
  {
    return this.http.post<boolean>(environment.url + 'User/addUser', user)
  }
  GetNumOfUsers() :Observable<boolean>
  {
    return this.http.get<boolean>(environment.url + 'User/addUser')
  }
}
