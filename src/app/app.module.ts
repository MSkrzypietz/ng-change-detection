import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ListComponent } from './list/list.component';
import { List2Component } from './list2/list2.component';
import { List2detailComponent } from './list2/list2detail/list2detail.component';
import { List3Component } from './list3/list3.component';
import { List3detailComponent } from './list3/list3detail/list3detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListComponent,
    List2Component,
    List2detailComponent,
    List3Component,
    List3detailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
