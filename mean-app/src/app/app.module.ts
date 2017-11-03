import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, RouterLink, Routes } from '@angular/router';
//import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AlbumService } from './album.service';
import { AlbumComponent } from './album/album.component';
import { AlbumCreateComponent } from './album-create/album-create.component';

const routes: Routes = [
  { path: 'albums', component: AlbumComponent },
  { path: 'album-create', component: AlbumCreateComponent },
  { path: '', redirectTo: '/albums', pathMatch: 'full' },
  { path: '**', redirectTo: '/albums', pathMatch: 'full' },
];


@NgModule({
  declarations: [
    AppComponent,
    AlbumComponent,
    AlbumCreateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes, {useHash: true})
  ],
  providers: [
    AlbumService,
    //{provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
