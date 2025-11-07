import { Component } from '@angular/core';
import { FormationsListComponent } from "../formations-list/formations-list";

@Component({
  selector: 'app-admin',
  imports: [FormationsListComponent],
  templateUrl: './admin.html',
  styleUrl: './admin.css',
})
export class AdminComponent {

}
