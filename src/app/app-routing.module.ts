import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './core/auth.guard';
import { HomeComponent } from './home/home.component';
import{ UniversityRegistationComponent } from './university-registation/university-registation.component';
// import { UserLoginComponent } from './ui/user-login/user-login.component';
// import { HomePageComponent } from './ui/home-page/home-page.component';
// import { NotesListComponent } from './notes/notes-list/notes-list.component';
// import { UploadPageComponent } from './uploads/upload-page/upload-page.component';

// import { SsrPageComponent } from './ui/ssr-page/ssr-page.component';


const routes: Routes = [
  { path: '', component: UniversityRegistationComponent },
  { path: 'home', component: HomeComponent},
  // { path: 'notes', component: NotesListComponent,  canActivate: [AuthGuard] },
  // { path: 'uploads',  component: UploadPageComponent,  canActivate: [AuthGuard] },

  // { path: 'ssr', component: SsrPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
