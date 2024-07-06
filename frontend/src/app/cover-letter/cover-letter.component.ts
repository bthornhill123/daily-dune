import { HttpClient, HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cover-letter',
  template: `
  <section>
    <h1>Generate a cover letter</h1>
    <p>Resume</p>
    <textarea [value]="resume"></textarea>
    <p>Job description</p>
    <textarea [value]="jobDescription"></textarea>
    <button (click)="callBackend()" [ariaBusy]="loading">Send a request</button>
  </section>

  <section *ngIf="coverLetter">
    <p>Cover letter</p>
    <textarea readonly=true [value]="coverLetter" rows="15"></textarea>
  </section>
  `,
})
export class CoverLetterComponent {
  loading = false;
  resume = 'Solved every problem in the world';
  jobDescription = 'You will engage with a team of engineers to design and develop a new product.';
  coverLetter = '';
  constructor(private http: HttpClient) { }

  async callBackend() {
    this.loading = true;
    const params = new HttpParams({
      fromObject: {
        resume: this.resume,
        jobDescription: this.jobDescription,
      }
    });

    this.http.get<{ coverLetter: string }>('http://localhost:3000/open-ai/cover-letter', { params }).subscribe(data => {
      this.coverLetter = data.coverLetter.trim()
      this.loading = false;
    });
  }
}
