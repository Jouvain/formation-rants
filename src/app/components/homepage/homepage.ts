import { Component } from '@angular/core';
import { FormationsListComponent } from "../formations-list/formations-list";

@Component({
  selector: 'app-homepage',
  imports: [FormationsListComponent],
  templateUrl: './homepage.html',
  styleUrl: './homepage.css',
})
export class HomepageComponent {

}
