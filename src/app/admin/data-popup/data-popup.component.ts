import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthService } from 'src/app/servise/auth.service';

export interface DialogData {
  user_id:any;
  branch_id:any;
  ibo_code:any;
  name_of_city:any;
  branch_code:any;
  first_name:any;
  middle_name:any;
  last_nameany:any;
  fathers_name:any;
  dob:any;
  nationality:any;
  residential_address:any;
  city:any;
  state:any;
  pin_code:any;
  mobile:any;
  email:any;
  password:any;
  id_proof_name:any;
  id_proof_no:any;
  profile:any;
  name_of_bank:any;
  account_no:any;
  ifsc_code:any;
  profile_picture:any;
  aadhar_front:any;
  aadhar_back:any;
  other_proof:any;
  register_at:any;
  updated_at:any;
  status:any;
  branch:any;
  branch_short_name:any;
  branch_head:any;
  contact:any;
  username:any;
  batch_card:any;
  create_switch:any;
  profile_pic:any;
  branch_status:any;
  created_at:any;
}

@Component({
  selector: 'app-data-popup',
  templateUrl: './data-popup.component.html',
  styleUrls: ['./data-popup.component.css']
})
export class DataPopupComponent implements OnInit {

  // action:string;
  local_data:any;

  constructor( private auth:AuthService,
    public dialogRef: MatDialogRef<DataPopupComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: DialogData) { 
      this.local_data = {...data};
      // this.action = this.local_data.action;
    }

  
    closeDialog(){
      this.dialogRef.close({event:'Cancel'});
    }

  userData:any;

  ngOnInit(): void {
  }

}
