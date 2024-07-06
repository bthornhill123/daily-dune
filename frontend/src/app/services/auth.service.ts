import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Auth, authState, GoogleAuthProvider, signInAnonymously, signInWithPopup, signInWithEmailAndPassword, signOut, User } from '@angular/fire/auth';
import { Firestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private router: Router, private auth: Auth, firestore: Firestore) {
  }

  async loginWithGoogle() {
    return await signInWithPopup(this.auth, new GoogleAuthProvider());
  }

  async logout() {
    return await signOut(this.auth);
  }

  /** Returns `User` object for currently logged-in user, otherwise returns null */
  get user(): User | null {
    return this.auth.currentUser;
  }
}
