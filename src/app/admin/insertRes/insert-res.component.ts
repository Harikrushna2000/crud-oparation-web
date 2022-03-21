import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-insert-res',
  templateUrl: './insert-res.component.html',
  styleUrls: ['./insert-res.component.css']
})
export class InsertResComponent implements OnInit {

  constructor() { }

  url = environment.httpsUrl;

  researchForm = new FormGroup({
    research_content : new FormControl(''),
    send_to : new FormControl('')
  })
  ngOnInit(): void {
  }

  research(){
    var formValue = this.researchForm.value;
    var mainData = {
      research_content : formValue.research_content,
      send_to : formValue.send_to
    }

    var fd = new FormData();

    $.each(mainData,function(key:string,value:any | Blob){
      fd.append(key,value);
    })

    var myHeders = new Headers();

    fetch(this.url + '/admin/research/add',{
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
