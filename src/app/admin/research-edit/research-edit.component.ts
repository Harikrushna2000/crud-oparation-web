import { formatDate } from '@angular/common';
import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { DialogData } from '../data-popup/data-popup.component';

@Component({
  selector: 'app-research-edit',
  templateUrl: './research-edit.component.html',
  styleUrls: ['./research-edit.component.css']
})
export class ResearchEditComponent implements OnInit {

  url = environment.httpsUrl;
  rdata:any;

  formData:any;
  constructor(
    @Optional() @Inject(MAT_DIALOG_DATA)public data: DialogData) {
      this.formData = {...data}
      this.rdata = data;
      this.updatForm.patchValue({
        research_id : this.rdata.research_id,
        research_content : this.rdata.research_content,
        send_to : this.rdata.send_to
      });
   }
  
  updatForm = new FormGroup({
    research_id : new FormControl(''),
    research_content : new FormControl(''),
    send_to : new FormControl('')
  })

  ngOnInit(): void {
  }

  updetData(){
    var formValue = this.updatForm.value;
    var mainData = {
      research_id : formValue.research_id,
      research_content : formValue.research_content,
      send_to : formValue.send_to
    }

    var fd = new FormData();

    $.each(mainData,function(key:string,value:any | Blob){
      fd.append(key,value);
    })

    var myHeders = new Headers();

    fetch(this.url + '/admin/research/updateResearch',{
      method : "POST",
      headers : myHeders,
      body : fd
    })
    .then(respons=> respons.json())
    .then(res=>{
      console.log(res)
    })
  }

}
