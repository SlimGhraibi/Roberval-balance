import { Component, OnInit, Input } from '@angular/core';
import { BouleClass } from '../../../models/BouleClass';

@Component({
  selector: 'app-boules',
  templateUrl: './boules.component.html',
  styleUrls: ['./boules.component.css']
})
export class BoulesComponent implements OnInit {

  @Input() boule: BouleClass;

  redColor: Boolean;

  constructor() {
    this.redColor = false;
   }

  ngOnInit() {
  }

  changeColor() {
    this.redColor = true;
    console.log('click work');
  }

}
