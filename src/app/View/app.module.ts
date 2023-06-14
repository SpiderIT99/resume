import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';
import { FooterComponent } from './components/footer/footer.component';
import { CoursesAndLanguagesComponent } from './components/courses-and-languages/courses-and-languages.component';
import { CookiesComponent } from './components/cookies/cookies.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    AboutMeComponent,
    ExperienceComponent,
    EducationComponent,
    FooterComponent,
    CoursesAndLanguagesComponent,
    CookiesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
