import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-client-insert',
  templateUrl: './client-insert.component.html',
  styleUrls: ['./client-insert.component.css'],
})
export class ClientInsertComponent implements OnInit {
  clientIns = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    phone_number: new FormControl(''),
    aadhar_number: new FormControl(''),
    aadhar_front: new FormControl(''),
    aadhar_back: new FormControl(''),
    other_proof: new FormControl(''),
    dob: new FormControl(''),
    profile_pic: new FormControl(''),
  });

  constructor() {}

  url = environment.httpsUrl;
  data = environment.httpUrl;


  selectedFile1:File | null = null;
  selectedFile2:File | null = null;
  selectedFile3:File | null = null;
  selectedFile4:File | null = null;

  onFileChange1(event: any) {
    this.selectedFile1 = event.target.files[0];
  }
  onFileChange2(event: any) {
    this.selectedFile2 = event.target.files[0];
  }
  onFileChange3(event: any) {
    this.selectedFile3 = event.target.files[0];
  }
  onFileChange4(event: any) {
    this.selectedFile4 = event.target.files[0];
  }

  clientForm() {
    var formValue = this.clientIns.value;
    var maindata = {
      name: formValue.name,
      email: formValue.email,
      phone_number: formValue.phone_number,
      aadhar_number: formValue.aadhar_number,
      aadhar_front:this.selectedFile1,
      aadhar_back:this.selectedFile2,
      other_proof:this.selectedFile3,
      dob: formValue.dob,
      profile_pic:this.selectedFile4,
    };
    console.log(maindata)

    var fd = new FormData();

    $.each(maindata, function (key: string, value: any | File | Blob) {
      fd.append(key, value);
    });

    var myHeaders = new Headers();

    fetch(this.data + '/client/create', {
      method: 'POST',
      headers: myHeaders,
      body: fd
    })
      .then((response) => response.json())
      .then((res) => {
        console.log(res);
      });
  }
  ngOnInit(): void {}
}
