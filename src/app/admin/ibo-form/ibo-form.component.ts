import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/servise/auth.service';
import { environment } from '../../../environments/environment';

export interface user{
  name_of_city:any;
      first_name: any;
      middle_name:any;
      last_name: any;
      fathers_name:any;
      dob: any;
      nationality: any;
      residential_address: any;
      city: any;
      state: any;
      pin_code: any;
      mobile: any;
      email: any;
      id_proof_name: any;
      id_proof_no: any;
      profile: any;
      name_of_bank: any;
      account_no: any;
      ifsc_code: any;
      user_type: any;
      branch_code: any;
      profile_picture:any;
      aadhar_front: any;
      aadhar_back: any;
      other_proof: any;

}

@Component({
  selector: 'app-ibo-form',
  templateUrl: './ibo-form.component.html',
  styleUrls: ['./ibo-form.component.css']
})
export class IboFormComponent implements OnInit {

  constructor(private auth:AuthService,
    private http:HttpClient) { }


  ngOnInit(): void {
  }
  url = environment.httpsUrl; 
  errorMessage:any;

  iboDataForm = new FormGroup({
    name_of_city: new FormControl(''),
    first_name:  new FormControl(''),
    middle_name: new FormControl(''),
    last_name:  new FormControl(''),
    fathers_name: new FormControl(''),
    dob:  new FormControl(''),
    nationality:  new FormControl(''),
    residential_address:  new FormControl(''),
    city: new FormControl(''),
    state:  new FormControl(''),
    pin_code:  new FormControl(''),
    mobile:  new FormControl(''),
    email:  new FormControl(''),
    id_proof_name:  new FormControl(''),
    id_proof_no:  new FormControl(''),
    profile:  new FormControl(''),
    name_of_bank:  new FormControl(''),
    account_no:  new FormControl(''),
    ifsc_code:  new FormControl(''),
    user_type:  new FormControl(''),
    branch_code:  new FormControl(''),
    profile_picture: new FormControl(''),
    aadhar_front:  new FormControl(''),
    aadhar_back:  new FormControl(''),
    other_proof:  new FormControl(''),
  })

   selected1:File | null = null;  
   selected2:File | null = null;
   selected3:File | null = null;
   selected4:File | null = null;  
  
  onFileChange1(event:any){
    this.selected1 = event.target.files[0]
  }

  onFileChange2(event:any){
    this.selected2 = event.target.files[0]
  }

  onFileChange3(event:any){
    this.selected3 = event.target.files[0]
  }

  onFileChange4(event:any){
    this.selected4 = event.target.files[0]
  }

  
  iboInsert(){

    const formValue = this.iboDataForm.value;
    var maindata = {
      name_of_city: formValue.name_of_city,
      first_name: formValue.first_name,
      middle_name: formValue.middle_name,
      last_name: formValue.last_name,
      fathers_name: formValue.fathers_name,
      dob: formValue.dob,
      nationality: formValue.nationality,
      residential_address: formValue.residential_address,
      city: formValue.city,
      state: formValue.state,
      pin_code: formValue.pin_code,
      mobile: formValue.mobile,
      email: formValue.email,
      id_proof_name: formValue.id_proof_name,
      id_proof_no: formValue.id_proof_no,
      profile: formValue.profile,
      name_of_bank: formValue.name_of_bank,
      account_no: formValue.account_no,
      ifsc_code: formValue.ifsc_code,
      user_type: formValue.user_type,
      branch_code: formValue.branch_code,
      profile_picture: this.selected1,
      aadhar_front: this.selected2,
      aadhar_back: this.selected3,
      other_proof: this.selected4
    };

    var fd = new FormData();
    $.each(maindata,function(key:string,value:any | Blob){
      fd.append(key,value);
    })

    var myHeaders = new Headers();

    fetch(this.url + '/admin/users/create_ibo',{
      method:'POST',
      headers:myHeaders,
      body:fd
    })
    .then(response=>response.json())
    .then(res=>{
      console.log(res)
    })
  }
  
}
