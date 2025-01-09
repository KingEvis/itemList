import { Component } from '@angular/core';
import {ItemService} from "../../services/item.service";

@Component({
  selector: 'app-itemInfo',
  standalone: true,
  imports: [],
  templateUrl: './itemInfo.component.html',
  styleUrl: './itemInfo.component.css'
})
export class ItemInfoComponent {
  public prekiuSkaicius;

  public constructor(private prekesService:ItemService) {
    this.prekiuSkaicius = prekesService.prekes.length;

    prekesService.onCountChange.subscribe(
      ()=>{
        this.prekiuSkaicius = prekesService.prekes.length;
      }
    )
  }
}
