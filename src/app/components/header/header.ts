import { Component } from '@angular/core';
import { MenuComponent } from "../menu/menu";

@Component({
  selector: 'app-header',
  imports: [MenuComponent],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class HeaderComponent {

}
