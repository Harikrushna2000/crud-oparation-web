import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { AuthService } from 'src/app/servise/auth.service';
import { Location } from '@angular/common';
import { data } from 'jquery';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private auth:AuthService,
    private router:Router,
    private location:Location) { }


  ngOnInit(){
  }
  logout(): void{
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }
}
