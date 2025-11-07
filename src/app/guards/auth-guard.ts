import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { selectConnexion } from '../store/connexion/connexion.selector';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  // const storage = inject(Store);

  if(Boolean(localStorage.getItem('isConnected')) == true) {
    return true;
  } else {
    return router.createUrlTree(['/auth']);
  }

  // if (storage. == true) {
  //   return true;
  // } else {
  //   return router.createUrlTree(['/auth']);
  // }

};
