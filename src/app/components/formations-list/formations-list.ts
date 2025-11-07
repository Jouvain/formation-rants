import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Formation } from '../../models/formation';
import { FormationService } from '../../services/formation';

@Component({
  selector: 'app-formations-list',
  imports: [],
  templateUrl: './formations-list.html',
  styleUrl: './formations-list.css',
})
export class FormationsListComponent implements OnInit {

  @Input() isConnected!: boolean

  formations: Formation[] = [];
  errorMessage: string|null = null;

  constructor(private formationService: FormationService) {}

  ngOnInit(): void {
    this.actualiser();
  } 
  
  public actualiser(): void {
    this.formationService.findAll().subscribe({
      next: response => this.formations = response,
      error: err => this.errorMessage = "Aucun retour du backend !"     
    })
  }

  public supprimer(id: string) {
    this.formationService.remove(id).subscribe({
      next: response => this.formations = this.formations.filter(f => f.id !== id),
      error: err => console.log("Erreur lors de la suppression")
    })
  }


}
