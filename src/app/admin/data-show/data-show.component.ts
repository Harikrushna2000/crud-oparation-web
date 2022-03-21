import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  client_id:any;
  ibo_id:any;
  name:any;
  email:any;
  password:any;
  phone_number:any;
  dob:any;
  profile_pic:any;
  aadhar_number:any;
  aadhar_front:any;
  aadhar_back:any;
  other_proof:any;
  register_at:any;
  updated_at:any;
  status:any;
  ibo_code:any;
  first_name:any;
  last_name:any;
  
}

@Component({
  selector: 'app-data-show',
  templateUrl: './data-show.component.html',
  styleUrls: ['./data-show.component.css']
})
export class DataShowComponent implements OnInit {

  loc_data:any;

  constructor(public dialogRef: MatDialogRef<DataShowComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data:DialogData) {
      this.loc_data = {...data}
     }

  ngOnInit(): void {
  }

  closeDialog() {
    this.dialogRef.close();
  }

}
