import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { AlertifyService } from '../alertify.service';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { DataPopupComponent } from '../admin/data-popup/data-popup.component';


export interface User {
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

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  url = environment.httpsUrl;


  constructor(
    private http: HttpClient,
    private router: Router,
    private alertify: AlertifyService,
    private dialog: MatDialog
  ) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  
 
  getData(){
    return this.http.get(this.url + "/admin/dashboard")
  }
  getIbo(){
    return this.http.get(this.url + "/admin/users/ibo")
  }
  getClient(){
    return this.http.get(this.url + "/admin/clients")
  }

  getproduct(){
    return this.http.get(this.url + '/admin/products/getBranchProducts')
  }

  getResearch(){
    return this.http.get(this.url + '/admin/research')
  }

  getEmploy(){
    return this.http.get(this.url + '/admin/employee/')
  }
  
  iboPost(data:User):Observable<User>{
    // var body = JSON.stringify(data);
    return this.http.post<User>(this.url + '/admin/users/create_ibo', data, this.httpOptions)
  }


  loggedIn() {
    return !!sessionStorage.get('username');
  }

}
