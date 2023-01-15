import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ExperienceandprojectComponent } from './main/experienceandproject/experienceandproject.component';
import { HeaderComponent } from './main/header/header.component';
import { HomeComponent } from './main/home/home.component';
import { SkillsComponent } from './main/skills/skills.component';
import { AboutComponent } from './main/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    ExperienceandprojectComponent,
    HeaderComponent,
    HomeComponent,
    SkillsComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
