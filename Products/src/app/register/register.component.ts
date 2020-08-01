import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';
import { UserModel } from './user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private usersService:UsersService,private router:Router) { }
  user = new UserModel(null,null,null,null);
  ngOnInit(): void {
  }

  cpwd = "";

  register(){
    this.usersService.addUser(this.user);
    alert("Your account has been created successfully");
    this.router.navigate(['/login']);
  }

  pass() {
    let regex3 = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/; 
    if (regex3.test(this.user.password)) {
      if (this.user.password == this.cpwd) {
        return this.register();
      } else {
        alert("Passwords do not match");
        return false;
      }
    } else {
      alert("Invalid password\n\nNote: Your password must contain atleast eight characters and include an uppercase letter, a lowercase letter and a number");
      return false;
    }
  }

  email() {
    let regex1 = /^\w[\w\.-]+\w@[A-Za-z0-9][A-Za-z0-9-]+[A-Za-z0-9]\.[a-z]{2,3}(\.[a-z]{2,3})?$/;

    if (regex1.test(this.user.email)) {
      return this.pass();
    } else {
      alert("Enter valid email address");
      return false;
    }
  }

  name() {
    if (/[0-9]+/.test(this.user.firstName)) {
      alert("First name must not contain numbers");
      return false;
    } else if (/[0-9]+/.test(this.user.lastName)) {
      alert("Last name must not contain numbers");
      return false;
    } else {
      return this.email();
    }
  }

  validate() {
    if (this.user.firstName == "" || this.user.lastName == "" || this.user.email == "" || this.user.password == "" || this.cpwd == ""){
      alert("All fields are required");
      return false;
    } else {
      return this.name();
    }
  }

}