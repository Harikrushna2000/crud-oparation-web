import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../../data-popup/data-popup.component';

@Component({
  selector: 'app-employ-all-data',
  templateUrl: './employ-all-data.component.html',
  styleUrls: ['./employ-all-data.component.css']
})
export class EmployAllDataComponent implements OnInit {

  employees:any;
  constructor(
    @Optional() @Inject(MAT_DIALOG_DATA)public data:DialogData ) {
      this.employees = {...data};
     }

  ngOnInit(): void {
  }

}
