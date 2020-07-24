import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  a = ""; //nam1
  b = ""; //nam2
  c = ""; //mail
  d = ""; //pwd
  e = ""; //cpwd

  pass() {
    let regex3 = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/; 
    if (regex3.test(this.d)) {
      if (this.d == this.e) {
        alert("Your account has been created successfully")
        return true;
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

    if (regex1.test(this.c)) {
      return this.pass();
    } else {
      alert("Enter valid email address");
      return false;
    }
  }

  name() {
    if (/[0-9]+/.test(this.a)) {
      alert("First name must not contain numbers");
      return false;
    } else if (/[0-9]+/.test(this.b)) {
      alert("Last name must not contain numbers");
      return false;
    } else {
      return this.email();
    }
  }

  validate() {
    if (this.a == "" || this.b == "" || this.c == "" || this.d == "" || this.e == ""){
      alert("All fields are required");
      return false;
    } else {
      return this.name();
    }
  }

}