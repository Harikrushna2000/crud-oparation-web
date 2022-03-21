import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AlertifyService } from 'src/app/alertify.service';
import { environment } from 'src/environments/environment';
import { DialogData } from '../../data-popup/data-popup.component';

@Component({
  selector: 'app-employ-update',
  templateUrl: './employ-update.component.html',
  styleUrls: ['./employ-update.component.css'],
})
export class EmployUpdateComponent implements OnInit {
  update: any;
  constructor(public alertify:AlertifyService,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    this.update = {...data };
    console.log(this.update.emp_name)
    this.updateForm.patchValue({
      name : this.update.emp_name,
      dob : this.update.emp_dob,
      emp_id : this.update.emp_id,
      salary : this.update.emp_salary,
      profile_picture: this.update.profile_picture 
    });
  }

  url = environment.httpsUrl;
  selected:File | null = null;

  updateForm = new FormGroup({
    name : new FormControl(''),
    dob : new FormControl(''),
    emp_id : new FormControl(''),
    salary : new FormControl(''),
    profile_picture : new FormControl('')
  })

  uploudFile(event:any){
    this.selected = event.target.files[0];
  }

  updateData() {
    const formValue = this.updateForm.value;
    var maindata = {
      name: formValue.name,
      dob: formValue.dob,
      emp_id: formValue.emp_id,
      salary: formValue.salary,
      profile_picture: this.selected,
   }
  
    var fd = new FormData();
    // tslint:disable-next-line:typedef
    $.each(maindata, function (key: string, value: string | Blob) {
      fd.append(key, value);
    });

    var myHeaders = new Headers();

    fetch(this.url + '/admin/employee/update', {
      method: 'POST',
      headers: myHeaders,
      body: fd,
      //redirect: 'follow'
    })
      .then((response) => response.json())
      .then((res) => {
        this.alertify.success(res.msg)
      });
  }

  ngOnInit(): void {}
}
