import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { environment } from '../../environments/environment';
import { AuthService } from '../servise/auth.service';
import { AlertifyService } from '../alertify.service';
declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(
    public router: Router,
    public auth: AuthService,
    public alertify: AlertifyService,
  ) {}

  url = environment.httpsUrl;
  message:any;

  ngOnInit(): void {

    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [
        Validators.required,
        Validators.maxLength(8),
      ]),
    });
  }
 
  logIn() {
    if (this.loginForm.invalid) {
      this.alertify.warning('Please Enter All Details');
    }

    const formValue = this.loginForm.value;
    var maindata = {
      username: formValue.username,
      password: formValue.password,
    };

    var fd = new FormData();

    $.each(maindata, function (key: string, value: string | Blob) {
      fd.append(key, value);
    });
    var myHeaders = new Headers();

    fetch(this.url + '/admin/login', {
      method: 'POST',
      headers: myHeaders,
      body: fd,
      
    })
      .then((response) => response.json())
      .then((res) => {
        console.log(res);
        if (res.status == 'success') {
          sessionStorage.setItem('username',maindata.username);
          sessionStorage.setItem('password',maindata.password);
          this.alertify.success(res.msg);
          this.router.navigate(['admin/admin']);
          
        } else {
        
         this.message = this.alertify.error(res.msg);
        }
      });
    
  }
}
