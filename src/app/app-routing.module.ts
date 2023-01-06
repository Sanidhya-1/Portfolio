import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExperienceandprojectComponent } from './main/experienceandproject/experienceandproject.component';
import { HomeComponent } from './main/home/home.component';

const routes: Routes = [{component:ExperienceandprojectComponent,path:"experience"},
{component:HomeComponent,path:""}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
