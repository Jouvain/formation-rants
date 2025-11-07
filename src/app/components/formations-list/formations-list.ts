import { Component, OnInit } from '@angular/core';
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

  constructor(private formationService: FormationService) {}

  ngOnInit(): void {
    this.formationService.findAll().subscribe({
      next: response => this.formations = response,
      error: err => this.errorMessage = "Aucun retour du backend !"
    })
  }  

}
