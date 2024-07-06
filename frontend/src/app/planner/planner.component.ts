import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Timestamp } from 'firebase/firestore';
import { combineLatest, map, Observable } from 'rxjs';
import { FirebaseService, JournalEntry } from '../services/firebase.service';
import { TimeService } from '../services/time.service';


type DayPlanner = {
  day: Date;
  journalEntries?: JournalEntry[];
}

@Component({
  selector: 'app-planner',
  template: `

<dialog [open]="ui.isCreatingJournalEntry">
  <article>
    <h3>Create a journal entry</h3>
    <form [formGroup]="journalEntryForm">
      <label>Title</label>
      <input type="text" formControlName="title" placeholder="Title">
    
      <label>Content</label>
      <textarea rows="8" formControlName="content" placeholder="Content"></textarea>
    </form>
    
    <footer>
      <a href="" role="button" class="secondary" (click)="$event.preventDefault(); ui.isCreatingJournalEntry = false;">Cancel</a>
      <a href="" role="button" (click)="$event.preventDefault(); submitJournalEntry()">Confirm</a>
    </footer>
  </article>
</dialog>

<button (click)="ui.isCreatingJournalEntry=true">Create Journal Entry</button>


<details *ngFor="let day of days">
  <summary role="button" class="secondary">{{day.day | date}}</summary>
  <p><mark>Content</mark></p>
</details>

<div>
  <form [formGroup]="journalEntryForm">
    <label>Title</label>
    <input type="text" formControlName="title" placeholder="Title">
    
    <label>Content</label>
    <textarea rows="20" formControlName="content" placeholder="Content"></textarea>

      <!-- <mat-form-field>
          <mat-label>Title</mat-label>
          <input matInput formControlName="title" placeholder="Title" title="Title">
      </mat-form-field>

      <mat-form-field appearance="fill">
          <mat-label>Content</mat-label>
          <textarea matInput formControlName="content" cols="100" title="Content">
          </textarea>
      </mat-form-field> -->

  </form>
  <button mat-raised-button color="primary"
      [disabled]="!journalEntryForm.valid">Submit</button>
</div>

<h2>Journal</h2>
<div *ngFor="let entry of weeklyJournalEntries$ | async">
  <h3>{{entry.title}}</h3>
  <p>{{entry.content}}</p>
</div>
  `,
  styles: []
})
export class PlannerComponent implements OnInit {
  ui = {
    isCreatingJournalEntry: false,
  }
  days: DayPlanner[] = [];
  weeklyJournalEntries$: Observable<JournalEntry[]>;
  journalEntryForm: FormGroup;

  constructor(
    private firebaseService: FirebaseService,
    timeService: TimeService,
  ) {
    this.journalEntryForm = this.initializeForm();
    this.weeklyJournalEntries$ = combineLatest([timeService.selectedWeek$.asObservable(), firebaseService.journalEntries$]).pipe(
      map(([selectedWeek, journalEntries]) =>
        journalEntries.filter(entry => {
          const entryDate = entry.date.toDate();
          return selectedWeek.start < entryDate && entryDate < selectedWeek.end;
        })
      )
    );
  }

  ngOnInit(): void {
    this.initializeForm();
    this.initializeDays();
  }

  initializeForm() {
    return new FormGroup({
      title: new FormControl('', Validators.required),
      content: new FormControl('', Validators.required),
    });
  }

  createJournalEntry() {
    this.ui.isCreatingJournalEntry = false;
  }

  initializeDays() {
    const startDay = new Date();
    const daysPastMonday = startDay.getDay();
    startDay.setDate(startDay.getDate() - daysPastMonday);

    for (let i = 0; i < 7; i++) {
      this.days.push({
        day: new Date(startDay)
      });
      startDay.setDate(startDay.getDate() + 1);
    }
  }

  async submitJournalEntry() {
    this.ui.isCreatingJournalEntry = false;

    const journalEntry: JournalEntry = {
      title: String(this.journalEntryForm.value.title),
      content: String(this.journalEntryForm.value.content),
      date: Timestamp.fromDate(new Date()),
    };
    await this.firebaseService.addDocument('journalEntries', journalEntry);

    this.journalEntryForm = this.initializeForm();
  }
}
