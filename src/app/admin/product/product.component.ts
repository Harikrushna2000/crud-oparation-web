import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { AlertifyService } from 'src/app/alertify.service';
import { AuthService } from 'src/app/servise/auth.service';
import { environment } from 'src/environments/environment';
import { DialogData } from '../data-popup/data-popup.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  proAddForm = new FormGroup({
    product_name: new FormControl(''),
    product_description: new FormControl(''),
  });

  proStockForm = new FormGroup({
    product_id: new FormControl(''),
    quantity: new FormControl(''),
  });

  proBranchForm = new FormGroup({
    branch_id: new FormControl(''),
    product_id: new FormControl(''),
    quantity: new FormControl(''),
    received_by: new FormControl('')
  });

  constructor(
    private auth:AuthService,
    private alertify:AlertifyService
  ) { }

  productData:any;

  dataSource = new MatTableDataSource<DialogData>([]);
  displayColumns:string[] = ['branch_id','product_id','quantity','received_by','inserted_at','branch','branch_short_name','product_name']

  url = environment.httpsUrl;

  onSubmitAdd(){
    
    var formValue = this.proAddForm.value
    var maindata = {
      product_name: formValue.product_name,
      product_description: formValue.product_description
    }

    var fd = new FormData()

    $.each(maindata,function(key:string,value:any | Blob){
      fd.append(key,value);
    })

    var myHeaders = new Headers();

    fetch(this.url + '/admin/products/add',{
      method:'POST',
      headers:myHeaders,
      body:fd,
    })
    .then(result=>result.json())
    .then(res=>{
      var status =res.status;
      if( status === "success"){
      this.alertify.success(res.msg);
      }
      else{
      this.alertify.message(res.msg);
      }
    })
  }

  onSubmitStock(){
    
    var formValue = this.proStockForm.value
    var maindata = {
      product_id: formValue.product_id,
      quantity: formValue.quantity
    }

    var fd = new FormData()

    $.each(maindata,function(key:string,value:any | Blob){
      fd.append(key,value);
    })

    var myHeaders = new Headers();

    fetch(this.url + '/admin/products/addStock',{
      method:'POST',
      headers:myHeaders,
      body:fd,
    })
    .then(result=>result.json())
    .then(res=>{
      var status =res.status;
      if( status === "success"){
      this.alertify.success(res.msg);
      }
      else{
      this.alertify.error(res.msg);
      }
    })
  }

  onSubmitBranch(){
    
    var formValue = this.proBranchForm.value
    var maindata = {
      branch_id: formValue.branch_id,
      product_id: formValue.product_id,
      quantity: formValue.quantity,
      received_by: formValue.received_by
    }

    var fd = new FormData()

    $.each(maindata,function(key:string,value:any | Blob){
      fd.append(key,value);
    })

    var myHeaders = new Headers();

    fetch(this.url + '/admin/products/addProductToBranch',{
      method:'POST',
      headers:myHeaders,
      body:fd,
    })
    .then(result=>result.json())
    .then(res=>{
      var status =res.status;
      if( status === "success"){
      this.alertify.success(res.msg);
      }
      else{
      this.alertify.error(res.msg);
      }
    })
  }

  ngOnInit(): void {
    this.getPro()
  }

  public getPro(){
    this.auth.getproduct().subscribe((res)=>{
      this.productData = res;
      this.prepareMatTable();
    })
  }

  prepareMatTable(){
    this.dataSource = new MatTableDataSource<DialogData>(this.productData.branch_product)
  }

}
