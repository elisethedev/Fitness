import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProgramComponent } from './program/program.component';

const routes: Routes = [
  {path: "", 
  redirectTo: "Home",
  pathMatch: 'full',
  },
  {path: "Home", 
  component: HomeComponent
  },
  {path: "Program", 
  component: ProgramComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
