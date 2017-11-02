import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, RouterLink } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AlbumService } from './album.service';
import { AlbumComponent } from './album/album.component';
import { AlbumCreateComponent } from './album-create/album-create.component';

const ROUTES = [
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
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    AlbumService,
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
