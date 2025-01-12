import {EventEmitter, Injectable} from '@angular/core';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  public prekes:Item[]=[]
  public onCountChange = new EventEmitter();

  constructor() {
    let tmp=localStorage.getItem("prekes");
    if (tmp != null) {
      this.prekes=JSON.parse(tmp);
    }
  }

  private issaugoti() {
    localStorage.setItem("prekes", JSON.stringify(this.prekes));
  }

  public pridetiPreke(preke:String, kiekis:Number) {
    this.prekes.push({pavadinimas:preke,kiekis:kiekis});
    this.issaugoti();
    this.onCountChange.emit();
  }

  public pasalintiPreke(i:number) {
    this.prekes.splice(i,1);
    this.issaugoti();
    this.onCountChange.emit();
  }

  public pasalintiViska() {
    this.prekes.length = 0;
    this.issaugoti();
    this.onCountChange.emit();
  }
}
