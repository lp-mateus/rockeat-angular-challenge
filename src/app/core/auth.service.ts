import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  getUserToken(): string {
    return localStorage.getItem('token') ?? '';
  }

  logout(): void {
    localStorage.clear();
  }
}
