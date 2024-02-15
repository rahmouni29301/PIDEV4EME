import { Component } from '@angular/core';
import { Apartment } from '../core/models/apartment';
import { Residence } from '../core/models/residence';
import { ApartmentService } from '../shared/apartment.service';

@Component({
  selector: 'app-residences',
  templateUrl: './residences.component.html',
  styleUrls: ['./residences.component.css'],
 // providers:[ApartmentService]
})
export class ResidencesComponent {
  surface : number;
  name : string = "valeur initial";
  name2 : string = "";
  //injecter le service ApartmentService dans le composant ResidencesComponent
  constructor(private aps:ApartmentService){}

  ngOnInit(){
    //this.listResidences=this.aps.getResidences();
    this.aps.getAllResidences().subscribe(res=>this.listResidences=res);
   // this.listApartments=this.aps.getApartments();
   this.aps.getAllApartments().subscribe(res=>this.listApartments=res);
  }
  setName(val:string){
    this.name=val;
  }
  deleteResidence(r:Residence){
    this.aps.deleteResidence(r).subscribe(()=>this.aps.getAllResidences().subscribe(res=>this.listResidences=res));
  }
  listResidences:Residence[]=[];
  listApartments:Apartment[]=[];
    list : Apartment[]=[];
  getApartments(nb:number){
  this.list=[];
  for ( let a of this.listApartments){
     console.log(a);
     if (a.residence?.id == nb){
          this.list.push(a);
     }
  }
}
}
