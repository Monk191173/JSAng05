import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WorksComponent } from './works/works.component';
import { BadwordsComponent } from './badwords/badwords.component';
import { UserlistComponent } from './userlist/userlist.component';
import { TasklistComponent } from './tasklist/tasklist.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WorksComponent,
    BadwordsComponent,
    UserlistComponent,
    TasklistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
