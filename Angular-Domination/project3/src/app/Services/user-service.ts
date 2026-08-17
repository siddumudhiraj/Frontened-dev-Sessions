import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UserService {
  userList() {
    return [
      { id: 1, name: "siddu", email: "siddu@test.com", city: "Hyd" },
      { id: 2, name: "shiva", email: "shiva@test.com", city: "Hyd" },
      { id: 3, name: "sridhar", email: "sridhar@test.com", city: "Hyd" },
      { id: 4, name: "lokesh", email: "lokesh@test.com", city: "Hyd" }
    ];
  }
} 