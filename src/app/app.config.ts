import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';
import { authInterceptor } from './interceptors/auth-interceptor';
import { provideState, provideStore } from '@ngrx/store';
import { connexionReducer } from './store/connexion/connexion.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withInterceptorsFromDi(), withInterceptors([authInterceptor])),
    provideStore(),
    provideState('connexion', connexionReducer)
]
};
