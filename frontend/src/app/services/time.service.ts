import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

type Week = {
  start: Date;
  end: Date;
}

function getWeekStart() {
  const date = new Date();

  const daysPastMonday = date.getDay();
  date.setDate(date.getDate() - daysPastMonday);

  return date;
}

function getWeekEnd() {
  const monday = getWeekStart();
  monday.setDate(monday.getDate() + 7);

  const sunday = new Date(monday);
  return sunday;
}

@Injectable({
  providedIn: 'root'
})
export class TimeService {
  selectedWeek$ = new BehaviorSubject<Week>({
    start: getWeekStart(),
    end: getWeekEnd(),
  });

  constructor() { }
}
