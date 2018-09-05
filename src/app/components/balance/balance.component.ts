import { Component, OnInit } from '@angular/core';
import { puts } from 'util';
import { BouleClass } from '../../models/BouleClass';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css']
})
export class BalanceComponent implements OnInit {

  boules: any = [];
  nbBoule: Number = 8; /* this is static value of boule, after we will develope an input text*/
  boule: BouleClass;
  result: String ;

  selectedBoule ;

  constructor() {
  }

  ngOnInit() {
    this.createBoule(this.nbBoule);
  }

  createBoule(nbBoule) {
       for (let index = 0; index < nbBoule ; index++) {
       this.boule = new BouleClass(index + 1 , 'blue' , 10);
       this.boules.push(this.boule);
       }
       console.log('boules==> ', this.boules);
       this.boules[Math.floor(Math.random() * this.boules.length)].bouleWeight = 12;
  }

  selectBoule(boule) {
     this.selectedBoule = boule;

  }

  runBalance() {
    if (this.selectedBoule === undefined ) {
         this.result = 'tu dois séléctionner une boule !';
    } else if (this.selectedBoule.bouleWeight === 12) {
         this.result = `tu as gagné :) , la boule ${this.selectedBoule.bouleNumber} est la plus lourde!
                         Solution trouvé en ${this.selectedBoule.bouleNumber} itérations `;
    } else {
       this.boules.forEach(element => {
          if ( element.bouleWeight === 12 ) {
         this.result = `tu as perdu :( , la boule ${element.bouleNumber} est la plus lourde!
                       Solution trouvé en ${element.bouleNumber} itérations `;
          }
       });
    }

  }

}

