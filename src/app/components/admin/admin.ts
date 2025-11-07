import { Component } from '@angular/core';
import { FormationsListComponent } from "../formations-list/formations-list";
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormationService } from '../../services/formation';

@Component({
  selector: 'app-admin',
  imports: [FormationsListComponent, ReactiveFormsModule],
  templateUrl: './admin.html',
  styleUrl: './admin.css',
})
export class AdminComponent {
  formationForm: FormGroup

  constructor(private formBuilder: FormBuilder, private formationService: FormationService) {
    this.formationForm = this.formBuilder.group({
      titre: '',
      duree: 0,
      dateDebut: null
    });
  }

  ajouterFormation() {
    console.log("Valeur du formulaire : ",this.formationForm.value);
    this.formationService.save(this.formationForm.value).subscribe(response => {
      console.log("Réponse à l'ajout : ", response);
    })
  }
}
