import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { getApp, initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideAuth, getAuth, connectAuthEmulator } from '@angular/fire/auth';
import { provideFirestore, getFirestore, Firestore, initializeFirestore, connectFirestoreEmulator } from '@angular/fire/firestore';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { PlannerComponent } from './planner/planner.component';
import { MaterialModule } from 'src/material.module';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { PicoExampleComponent } from './pico-example/pico-example.component';
import { CoverLetterComponent } from './cover-letter/cover-letter.component';
import { CreateJournalEntryComponent } from './create-journal-entry/create-journal-entry.component';

@NgModule({
  declarations: [
    AppComponent,
    PlannerComponent,
    AdminComponent,
    LoginComponent,
    PicoExampleComponent,
    CoverLetterComponent,
    CreateJournalEntryComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => {
      const auth = getAuth();
      if (environment.useEmulators) {
        connectAuthEmulator(auth, 'http://localhost:9099', { disableWarnings: true });
      }
      return auth;
    }),
    provideFirestore(() => {
      let firestore: Firestore;
      if (environment.useEmulators) {
        // Long polling required for Cypress
        firestore = initializeFirestore(getApp(), { experimentalForceLongPolling: true });
        connectFirestoreEmulator(firestore, 'localhost', 8080);
      } else {
        firestore = getFirestore();
      }
      return firestore;
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
