import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ApartmentService } from '../shared/apartment.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {

  constructor(private aps:ApartmentService){
    console.log(this.aps.getApartments())
  }
  //prop1: propriété d'entrée de ce composant
  //sa valeur sera envoyée par le composant parent
  @Input() prop1:string="";
  //prop2: propriét interne sa valeur sera définit dans ce composant
  prop2:string="prop2";
  @Output() prop3 = new EventEmitter<string>();
  notif(){
   this.prop3.emit("Success");
  }

  f(){
    alert('je suis le fils');
  }
}
