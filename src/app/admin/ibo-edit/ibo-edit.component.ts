import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/servise/auth.service';
import { environment } from 'src/environments/environment';
import { DialogData } from '../data-popup/data-popup.component';

@Component({
  selector: 'app-ibo-edit',
  templateUrl: './ibo-edit.component.html',
  styleUrls: ['./ibo-edit.component.css']
})
export class IboEditComponent implements OnInit {

  editData:any;
  constructor(private router:ActivatedRoute,private auth:AuthService,
    @Optional() @Inject(MAT_DIALOG_DATA)public data:DialogData) {
       this.editData = {...data}
       console.log(this.editData);
       this.iboUpdateForm.patchValue({
        branch_id: this.editData.branch_id,
        user_id: this.editData.user_id,
        name_of_city: this.editData.name_of_city,
        first_name:  this.editData.first_name,
        middle_name: this.editData.middle_name,
        last_name:  this.editData.last_name,
        fathers_name: this.editData.fathers_name,
        dob:  this.editData.dob,
        nationality:  this.editData.nationality,
        residential_address:  this.editData.residential_address,
        city: this.editData.city,
        state:  this.editData.state,
        pin_code:  this.editData.pin_code,
        id_proof_name:  this.editData.id_proof_name,
        id_proof_no:  this.editData.id_proof_no,
        profile:  this.editData.profile,
        name_of_bank:  this.editData.name_of_bank,
        account_no:  this.editData.account_no,
        ifsc_code:  this.editData.ifsc_code,
        profile_picture: this.editData.profile_picture,
        aadhar_front:  this.editData.aadhar_front,
        aadhar_back:  this.editData.aadhar_back,
        other_proof:  this.editData.other_proof,                      
       });
    }

    url = environment.httpsUrl;
    getparamid:any;

    ngOnInit(): void {
    }
    
  iboUpdateForm = new FormGroup({
    branch_id: new FormControl(''),
    user_id: new FormControl(''),
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
    id_proof_name:  new FormControl(''),
    id_proof_no:  new FormControl(''),
    profile:  new FormControl(''),
    name_of_bank:  new FormControl(''),
    account_no:  new FormControl(''),
    ifsc_code:  new FormControl(''),
    // user_type:  new FormControl(''),
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
 
  iboUpdate(){

    var formValue = this.editData.value;
    var maindata ={
      branch_id: formValue.branch_id,
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
      id_proof_name: formValue.id_proof_name,
      id_proof_no: formValue.id_proof_no,
      profile: formValue.profile,
      name_of_bank: formValue.name_of_bank,
      account_no: formValue.account_no,
      ifsc_code: formValue.ifsc_code,
      // user_type: formValue.user_type,
      user_id: formValue.user_id,
      profile_picture: this.selected1,
      aadhar_front: this.selected2,
      aadhar_back: this.selected3,
      other_proof: this.selected4
    }

    var fd = new FormData();
    $.each(maindata,function( key : string, value : any | Blob ){
      fd.append( key, value );
    });

    var myHeaders = new Headers();

    fetch(this.url + '/admin/users/update_ibo',{
      method : 'POST',
      headers : myHeaders,
      body : fd
    })
    .then( response => response.json())
    .then( res => {
      console.log(res);
    })
   }

}
