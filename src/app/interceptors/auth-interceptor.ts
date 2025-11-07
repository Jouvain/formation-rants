import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../environments/environment.devleopment';

export const authInterceptor: HttpInterceptorFn = (req, next) => {

  if (req.url == `${environment.BACKEND_URL}/authenticate` || req.method == 'GET') {
    return next(req);
  }

  const accessToken = localStorage.getItem('accessToken')

  const cloned = req.clone({
    setHeaders: { Authorization: `Bearer ${accessToken}` }
  })
  return next(cloned);
};
