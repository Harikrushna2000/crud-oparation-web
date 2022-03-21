import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { AlertifyService } from 'src/app/alertify.service';
import { AuthService } from 'src/app/servise/auth.service';
import { environment } from 'src/environments/environment';
import { DialogData } from '../../data-popup/data-popup.component';
import { EmployAddComponent } from '../employ-add/employ-add.component';
import { EmployAllDataComponent } from '../employ-all-data/employ-all-data.component';
import { EmployUpdateComponent } from '../employ-update/employ-update.component';

@Component({
  selector: 'app-employ-list',
  templateUrl: './employ-list.component.html',
  styleUrls: ['./employ-list.component.css']
})
export class EmployListComponent implements OnInit {

  url = environment.httpsUrl;

  constructor(private auth:AuthService,
    private dialog:MatDialog,
    private alertify:AlertifyService) { }

  dataSource = new MatTableDataSource<DialogData>([]);
  displyColumns:string[] = ['emp_id','branch_id','emp_name','emp_email','emp_dob','edit','delete','show']

  employList:any;
  searchId:any

  searchForm = new FormGroup({
    emp_id : new FormControl('')
  })

  ngOnInit(): void {
    this.showEmploy()
  }

  showEmploy(){
    this.auth.getEmploy().subscribe(res => {
      this.employList = res;
      this.employListMethod();
    })
  }
  employListMethod(){
    this.dataSource = new MatTableDataSource<DialogData>(this.employList.employees)
  }

  insert(){
    this.dialog.open(EmployAddComponent,{
      width:'400px'
    })
  }

  search(){
    const formValue = this.searchForm.value;
    var maindata = {
      emp_id: formValue.emp_id
   }
  
    var fd = new FormData();
    // tslint:disable-next-line:typedef
    $.each(maindata, function (key: string, value: string | Blob) {
      fd.append(key, value);
    });

    var myHeaders = new Headers();

    fetch(this.url + '/admin/employee/getSingleEmployee', {
      method: 'POST',
      headers: myHeaders,
      body: fd,
      //redirect: 'follow'
    })
      .then((response) => response.json())
      .then((res) => {
      this.searchId=res;
      this.serchData();
      });
  }
  serchData(){
    this.dataSource = new MatTableDataSource<DialogData>([this.searchId.employee_detail])
  }

  showData(element:any){
    this.dialog.open(EmployAllDataComponent,{
      data: element
    })
  }

  deleteData(element:any){
    var maindata ={
      emp_id: element
    }

    var fd = new FormData();

    $.each(maindata,function(key:string, value:any | Blob){
      fd.append(key,value);
    })

    var myHeaders = new Headers();

    fetch(this.url + '/admin/employee/delete',{
      method: 'POST',
      headers: myHeaders,
      body: fd
    })
    .then(result => result.json())
    .then(res =>{
      this.alertify.success(res.msg)
     })
  }

  editData(elment:any){
    this.dialog.open(EmployUpdateComponent,{
      width: '400px',
      data: elment
    })
  }
}
