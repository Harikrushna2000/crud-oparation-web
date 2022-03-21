import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-resistor',
  templateUrl: './resistor.component.html',
  styleUrls: ['./resistor.component.css']
})
export class ResistorComponent implements OnInit {
url = environment.httpsUrl;

  constructor() { }

  resistorForm = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')
  })
  ngOnInit(): void {
  }

  resistor(){
    var formValue = this.resistorForm.value;
    var maindata = {
      username:formValue.username,
      email:formValue.email,
      password:formValue.password
    }

    var fd = new FormData();
    $.each(maindata,function(key:string,value:any | Blob){
      fd.append(key,value);
    })

    var myHeaders = new Headers();

    fetch(this.url + '',{
      method:'POST',
      headers:myHeaders,
      body:fd
    })
    .then(result=> result)
    .then(res=>{
      console.log(res);
    })
  }



}
