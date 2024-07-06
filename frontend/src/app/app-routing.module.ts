import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { PlannerComponent } from './planner/planner.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './services/auth.guard';
import { PicoExampleComponent } from './pico-example/pico-example.component';
import { CoverLetterComponent } from './cover-letter/cover-letter.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },
  { path: 'planner', component: PlannerComponent, canActivate: [AuthGuard] },
  { path: 'pico', component: PicoExampleComponent, canActivate: [AuthGuard] },
  { path: 'cover-letter', component: CoverLetterComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
