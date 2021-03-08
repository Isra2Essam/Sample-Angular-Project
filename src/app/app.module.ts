import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LeftNavComponent } from './left-nav/left-nav.component';
import { NavigationTabsComponent } from './navigation-tabs/navigation-tabs.component';
import { HomeComponent } from './home/home.component';
import { DataPrivacyDayComponent } from './data-privacy-day/data-privacy-day.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { BookletComponent } from './booklet/booklet.component';
import { ResourcesComponent } from './resources/resources.component';
import { AuthComponent } from './auth/auth.component';
import {  HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccordionModule } from 'ngx-bootstrap/accordion';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeftNavComponent,
    NavigationTabsComponent,
    HomeComponent,
    DataPrivacyDayComponent,
    ContactUsComponent,
    BookletComponent,
    ResourcesComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    AccordionModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
