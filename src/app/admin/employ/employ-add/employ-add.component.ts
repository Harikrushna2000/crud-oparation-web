import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AlertifyService } from 'src/app/alertify.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-employ-add',
  templateUrl: './employ-add.component.html',
  styleUrls: ['./employ-add.component.css']
})
export class EmployAddComponent implements OnInit {

  constructor(public alertify:AlertifyService) { }

  url = environment.httpsUrl;
  select:File | null = null;

  insertForm = new FormGroup({
    branch_id : new FormControl(''),
    name : new FormControl(''),
    email : new FormControl(''),
    phone : new FormControl(''),
    dob : new FormControl(''),
    salary : new FormControl(''),
    profile_picture : new FormControl('')
  })

  changeFile(event:any){
    this.select = event.target.files[0];
  }
  ngOnInit(): void {
  }

  insertData(){
    const formValue = this.insertForm.value;
    var maindata = {
      branch_id: formValue.branch_id,
      name: formValue.name,
      email: formValue.email,
      phone: formValue.phone,
      dob: formValue.dob,
      salary: formValue.salary,
      profile_picture: this.select,
   }
  
    var fd = new FormData();
    // tslint:disable-next-line:typedef
    $.each(maindata, function (key: string, value: string | Blob) {
      fd.append(key, value);
    });

    var myHeaders = new Headers();

    fetch(this.url + '/admin/employee/add', {
      method: 'POST',
      headers: myHeaders,
      body: fd,
      //redirect: 'follow'
    })
      .then((response) => response.json())
      .then((res) => {
        this.alertify.success(res.msg);
      });
  }

}
