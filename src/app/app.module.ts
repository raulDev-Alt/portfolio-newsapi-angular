import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { NewsListComponent } from './modules/news-list/news-list.component';
import { ViewModule } from './modules/view.module';
import { NewzService } from './core/services/newz.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    ViewModule
  ],
  providers: [
    NewzService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
