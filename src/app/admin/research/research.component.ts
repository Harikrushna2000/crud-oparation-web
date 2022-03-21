import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { AuthService } from 'src/app/servise/auth.service';
import { environment } from 'src/environments/environment';
import { DialogData } from '../data-popup/data-popup.component';
import { InsertResComponent } from '../insertRes/insert-res.component';
import { ResearchEditComponent } from '../research-edit/research-edit.component';

@Component({
  selector: 'app-research',
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.css']
})
export class ResearchComponent implements OnInit {

  url = environment.httpsUrl;

  constructor(private auth:AuthService,
    private dialog:MatDialog) { }

  dataSource = new MatTableDataSource<DialogData>([]);
  displayColumns:string[] = ['research_id','research_content','send_to','inserted_date','edit'];

  searchForm = new FormGroup({
    research_id : new FormControl('')
  })
  
  data:any;
  searchData:any;

  ngOnInit(): void {
    this.research();
  }

  public research(){
    this.auth.getResearch().subscribe(res=>{
      this.data = res;
      this.researchData();
    })
  }

  researchData(){
    this.dataSource = new MatTableDataSource<DialogData>(this.data.research_data)
  }

  
  search(){
    var formValue = this.searchForm.value;
    var mainData = {
      research_id : formValue.research_id
    }

    var fd = new FormData();

    $.each(mainData,function(key:string,value:any | Blob){
      fd.append(key,value);
    })

    var myHeders = new Headers();

    fetch(this.url + '/admin/research/getDetail',{
      method : "POST",
      headers : myHeders,
      body : fd
    })
    .then(respons=> respons.json())
    .then(res=>{
      console.log(res)
      this.searchData = res;
      this.searchDataMethod();
    })
  }
   searchDataMethod(){
    this.dataSource = new MatTableDataSource<DialogData>([this.searchData.research_data]);
  }

  insertData(){
    this.dialog.open(InsertResComponent)
  }

  update(element:any){
    this.dialog.open(ResearchEditComponent,{
      data:element
    })
  }
}
