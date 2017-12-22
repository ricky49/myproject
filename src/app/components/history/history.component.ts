import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms/src/directives/ng_model';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap'
import { Input, Output } from '@angular/core/src/metadata/directives';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit  {
model;

  constructor() {}

  ngOnInit() {}

  onChange(date) {
   console.log(date.day);
   console.log(date.month);
   console.log(date.year);
  }

}
