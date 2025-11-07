import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Formation } from '../../models/formation';
import { FormationService } from '../../services/formation';

@Component({
  selector: 'app-formations-list',
  imports: [],
  templateUrl: './formations-list.html',
  styleUrl: './formations-list.css',
})
export class FormationsListComponent implements OnInit {

  formations: Formation[] = [];
  errorMessage: string|null = null;
  isConnected: boolean = false;

  // @Output() sendRemoval = new EventEmitter<number>();

  constructor(private formationService: FormationService) {}

  ngOnInit(): void {
    console.log(localStorage.getItem('isConnected'))
    if(localStorage.getItem('isConnected') === 'true') {
      this.isConnected = true;
    }

    this.formationService.findAll().subscribe({
      next: response => this.formations = response,
      error: err => this.errorMessage = "Aucun retour du backend !"
    })
  }  

  public supprimer(id: string) {
    // this.sendRemoval.emit(index);
    this.formationService.remove(id).subscribe({
      next: response => this.formations = this.formations.filter(f => f.id !== id),
      error: err => console.log("Erreur lors de la suppression")
    })
  }


}
