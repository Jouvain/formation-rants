import { Component } from '@angular/core';
import { FormationsListComponent } from "../formations-list/formations-list";
import { User } from '../../models/user';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../services/user';

@Component({
  selector: 'app-homepage',
  imports: [FormationsListComponent, ReactiveFormsModule],
  templateUrl: './homepage.html',
  styleUrl: './homepage.css',
})
export class HomepageComponent {

  userForm: FormGroup

  constructor(private formBuilder: FormBuilder, private userService: UserService) {
    this.userForm = this.formBuilder.group({
      username: '',
      password: '',
      role: ''
    });
  }

  ajouterUser() {
    console.log("Valeur du formulaire : ", this.userForm.value);
    this.userService.save(this.userForm.value).subscribe(response => {
      console.log("Réponse à l'inscription : ", response);
    })
  }

}
