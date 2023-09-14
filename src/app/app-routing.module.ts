import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { WorksComponent } from './works/works.component';
import { BadwordsComponent } from './badwords/badwords.component';
import { UserlistComponent } from './userlist/userlist.component';
import { TasklistComponent } from './tasklist/tasklist.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent },
  {
    path: 'works', component: WorksComponent, children: [
      { path: 'badwords', component: BadwordsComponent },
      { path: 'userlist', component: UserlistComponent },
      { path: 'tasklist', component: TasklistComponent }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
