// import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { data } from 'jquery';
import { from } from 'rxjs';
import { AuthService } from 'src/app/servise/auth.service';
import { environment } from 'src/environments/environment';
import { DataPopupComponent } from '../data-popup/data-popup.component';
import { IboEditComponent } from '../ibo-edit/ibo-edit.component';
import { IboFormComponent } from '../ibo-form/ibo-form.component';

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
  username:any | null;
  batch_card:any;
  create_switch:any;
  profile_pic:any | null;
  branch_status:any;
  created_at:any;
}
@Component({
  selector: 'app-ibo',
  templateUrl: './ibo.component.html',
  styleUrls: ['./ibo.component.css']
})
export class IboComponent implements OnInit {

  url = environment.httpsUrl;

  constructor(private auth:AuthService,
    private dialog: MatDialog,
   ) { }
 
 
  ngOnInit(): void {
    this.record();
  }

  userData:any;
  error:any;
  userArray:any;

   dataSource = new MatTableDataSource<DialogData>([]);
   displayedColumns: string[] = ['ibo_code','branch_code','name','register_at','edit','show'];

  public record(){
    this.auth.getIbo().subscribe((res) => {
      // console.log(res);
      this.userData = res;
      this.prepareMatTable();
    },
    error => {
      this.error = 'Api Data Not Found!'
    })
  }

  prepareMatTable(){
    this.dataSource = new MatTableDataSource<DialogData>(this.userData.user_data);
  }

  update(element:any){
    this.dialog.open(IboEditComponent,{
      height: '540px',
      data: element
    });
  }

  showData(action:any,element:any){
    // obj.action = action;
    const dialogRef = this.dialog.open(DataPopupComponent, {
      panelClass: 'fullscreen-dialog',
     width:'40%',
     height: '400px',
      data:element
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log( 'Dialog was closed' )
      console.log(result)
      });
  }

  searchform = new FormGroup({
    branch_id : new FormControl(''),
    ibo_code : new FormControl(''),
    first_name : new FormControl(''),
    from_date : new FormControl(''),
    to_date : new FormControl(''),
  })
  
  searchData(){

    const formValue = this.searchform.value;
    var maindata = {
      branch_id: formValue.branch_id,
      ibo_code: formValue.ibo_code,
      first_name: formValue.first_name,
      from_date: formValue.from_date,
      to_date: formValue.to_date
   }
  
    var fd = new FormData();
    // tslint:disable-next-line:typedef
    $.each(maindata, function (key: string, value: string | Blob) {
      fd.append(key, value);
    });

    var myHeaders = new Headers();

    fetch(this.url + '/admin/users/searchIBO', {
      method: 'POST',
      headers: myHeaders,
      body: fd,
      //redirect: 'follow'
    })
      .then((response) => response.json())
      .then((res) => {
      this.userArray=res;
      this.serch();
      });
  }
  serch(){
    this.dataSource = new MatTableDataSource<DialogData>(this.userArray.user_data);
  }
  
  insertData(){
    this.dialog.open(IboFormComponent);
  }

}
