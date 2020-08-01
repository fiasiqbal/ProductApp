import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }
  addUser(item){
    return this.http.post("http://localhost:3000/users/insert",{"user":item})
    .subscribe((data)=>{console.log(data)});
  }
  login(item){
    return this.http.post("http://localhost:3000/users/login",{"user":item});
    // .subscribe((data)=>{console.log(data)});
  }
}
