import { Component } from '@angular/core';
import { MenuComponent } from "../menu/menu";
import { Store } from '@ngrx/store';
import { selectConnexion } from '../../store/connexion/connexion.selector';
import { deconnexion } from '../../store/connexion/connexion.action';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [MenuComponent],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class HeaderComponent {
  isConnected: boolean = false;

  constructor(private store: Store, private router: Router) {
    store.select(selectConnexion).subscribe(response => this.isConnected = response);
  }

  logout(): void {
    localStorage.clear();
    this.store.dispatch(deconnexion());
    this.router.navigateByUrl("/home")
  }
}
