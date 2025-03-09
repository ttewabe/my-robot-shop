import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from 'src/card/card.component';
import { HomeComponent } from './home/home.component';
import { CatalogComponent } from './catalog/catalog.component';

@NgModule({
  declarations: [AppComponent, CardComponent, HomeComponent, CatalogComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
