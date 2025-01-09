import { Component } from '@angular/core';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {ItemService} from "../../services/item.service";
import { Item } from '../../models/item';

@Component({
  selector: 'app-itemShow',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './itemShow.component.html',
  styleUrl: './itemShow.component.css'
})
export class ItemShowComponent {
  public prekes:Item[]=[];
  public pavadinimas:String="";
  public kiekis:Number=0;

  public constructor(private prekesService:ItemService) {
    this.prekes=this.prekesService.prekes;
  }

  public istrinti(i:number) {
    this.prekesService.pasalintiPreke(i);
  }

  public istrinti_viska() {
    this.prekesService.pasalintiViska();
  }
}
