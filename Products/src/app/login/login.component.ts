import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    x = "";
    y = "";

    pass() {
        if (this.y.length < 8) {
            alert("Enter valid password");
            return false;
        }
        else {
            // alert("You are now logged in")
            return true;
        }
    }

    email() {
        let regex1 = /^\w[\w\.-]+\w@[A-Za-z0-9][A-Za-z0-9-]+[A-Za-z0-9]\.[a-z]{2,3}(\.[a-z]{2,3})?$/;

        if (regex1.test(this.x)) {
            return this.pass();
        } else {
            alert("Enter valid email address");
            return false;
        }
    }

    validateForm() {
        if (this.x == "" || this.y == "") {
            alert("Empty field");
            return false;
        } else {
            return this.email();
        }
    }

}
