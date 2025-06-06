import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const token = localStorage.getItem("accesstoken")
  const router = inject(Router)

  if (!token) {
    router.navigate(['/login'])
    return false
  }

  return true;
};
