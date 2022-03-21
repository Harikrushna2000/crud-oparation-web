import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AuthService } from 'src/app/servise/auth.service';
import { environment } from 'src/environments/environment';
import { ClientInsertComponent } from '../client-insert/client-insert.component';
import { DataShowComponent } from '../data-show/data-show.component';

export interface periodicElement {
  client_id: number;
  ibo_id: number;
  name: string;
  email: any;
  password: any;
  phone_number: number;
  dob: any;
  profile_pic: any;
  aadhar_number: number;
  aadhar_front: any;
  aadhar_back: any;
  other_proof: any;
  register_at: any;
  updated_at: any;
  status: number;
  ibo_code: any;
  first_name: string;
  last_name: string;
  branch: string;
  branch_short_name: string;
}

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css'],
})
export class ClientsComponent implements OnInit {
  url = environment.httpsUrl;

  constructor(private auth: AuthService, private dialog: MatDialog) {}
  // private dialog:MatDialog,
  // private dialogRef:MatDialogRef<DataShowComponent>) {}
  clientsData: any;
  error: any;
  userArray: any;

  clientList = new MatTableDataSource<periodicElement>([]);
  displayedColumns: any[] = [
    'client_id',
    'name',
    'email',
    'aadhar_number',
    'show',
  ];
  // @ViewChild(MatPaginator) paginator:MatPaginator;

  // ngAfterViewInit() {
  //   this.clientList.paginator = this.paginator;
  // }

  ngOnInit(): void {
    this.clientsRecord();
  }

  public clientsRecord() {
    this.auth.getClient().subscribe(
      (res) => {
        this.clientsData = res;
        this.clientMatTable();
      },
      (error) => {
        this.error = 'Api Data Not Found!';
      }
    );
  }

  clientMatTable() {
    this.clientList = new MatTableDataSource<periodicElement>(
      this.clientsData.clients_data
    );
  }

  showData(element: any) {
    const dialogRef = this.dialog.open(DataShowComponent, {
      panelClass: 'fullscreen-dialog',
      width: '40%',
      height: '400px',
      data: element,
    });
  }

  searchform = new FormGroup({
    ibo_id : new FormControl(''),
    branch_id : new FormControl(''),
    name : new FormControl(''),
    from_date : new FormControl(''),
    to_date : new FormControl(''),
  })

  searchData() {
    const formValue = this.searchform.value;
    var maindata = {
      ibo_id: formValue.ibo_id,
      branch_id: formValue.branch_id,
      name: formValue.name,
      from_date: formValue.from_date,
      to_date: formValue.to_date,
    };

    var fd = new FormData();
    // tslint:disable-next-line:typedef
    $.each(maindata, function (key: string, value: string | Blob) {
      fd.append(key, value);
    });

    var myHeaders = new Headers();

    fetch(this.url + '/admin/clients/searchClient', {
      method: 'POST',
      headers: myHeaders,
      body: fd,
      //redirect: 'follow'
    })
      .then((response) => response.json())
      .then((res) => {
        this.userArray = res;
        this.serch();
      });
  }
  serch() {
    this.clientList = new MatTableDataSource<periodicElement>(
      this.userArray.clients_data
    );
  }


  clientIns(){
    this.dialog.open(ClientInsertComponent,{
      width:'700px'
    })
  }
}
