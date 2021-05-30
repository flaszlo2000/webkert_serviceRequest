import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoryComponent } from './pages/history/history.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SubjectsComponent } from './pages/subjects/subjects.component';
import { LoginGuard } from './shared/guards/login.guard';

const routes: Routes = [
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full"
  },
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "home",
    component: HomeComponent,
    canActivate: [LoginGuard]
  },
  {
    path: "subjects",
    component: SubjectsComponent,
    canActivate: [LoginGuard]
  },
  {
    path: "history",
    component: HistoryComponent,
    canActivate: [LoginGuard]
  },
  {
    path: "**",
    redirectTo: "/login",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
