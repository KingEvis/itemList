import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ItemAddComponent} from "./components/itemAdd/itemAdd.component";
import {ItemShowComponent} from "./components/itemShow/itemShow.component";
import {ItemInfoComponent} from "./components/itemInfo/itemInfo.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ItemAddComponent, ItemShowComponent, ItemInfoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Pirkiniu_Sarasas';
}
