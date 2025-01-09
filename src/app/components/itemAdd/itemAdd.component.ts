import { Component } from '@angular/core';
import {ItemService} from "../../services/item.service";
import {FormsModule} from "@angular/forms";
import { Item } from '../../models/item';

@Component({
  selector: 'app-itemAdd',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './itemAdd.component.html',
  styleUrl: './itemAdd.component.css'
})



export class ItemAddComponent {
  public prekes:Item[]=[];
  public pavadinimas:String="";
  public kiekis:Number=0;

  public constructor(private prekesService:ItemService) {
    this.prekes=this.prekesService.prekes;
  }

  public pridetiPreke() {
    this.prekesService.pridetiPreke(this.pavadinimas, this.kiekis);
    this.pavadinimas="";
    this.kiekis=0;
  }
}
