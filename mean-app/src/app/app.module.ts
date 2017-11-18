import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, RouterLink, Routes } from '@angular/router';
//import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';


import { AlbumComponent } from './album/album.component';
import { AlbumCreateComponent } from './album-create/album-create.component';
import { TestComponent } from './test/test.component';
import { AlbumDetailComponent } from './album-detail/album-detail.component';
import { RegisterUserComponent } from './register-user/register-user.component';

import { AlbumService } from './services/album.service';
import { UserService } from './services/user.service';
import { ReviewService } from './services/review.service';
import { UserComponent } from './user/user.component';


const routes: Routes = [
  { path: 'albums', component: AlbumComponent },
  { path: 'album-create', component: AlbumCreateComponent },
  { path: 'test', component: TestComponent },
  { path: 'album-details/:id', component: AlbumDetailComponent },
  { path: 'register-user', component: RegisterUserComponent},
  { path: 'user/:id', component: UserComponent },
  { path: '', redirectTo: '/albums', pathMatch: 'full' },
  { path: '**', redirectTo: '/albums', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    AlbumComponent,
    AlbumCreateComponent,
    TestComponent,
    AlbumDetailComponent,
    RegisterUserComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes, {useHash: true})
  ],
  providers: [
    AlbumService,
    UserService,
    ReviewService
    //{provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
