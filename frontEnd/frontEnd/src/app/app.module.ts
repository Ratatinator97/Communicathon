import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardIDService } from './card-id.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListComponent } from './card-id/list/list.component';
import { EditComponent } from './card-id/edit/edit.component';
import { CreateComponent } from './card-id/create/create.component';
import { MatToolbarModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    EditComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatToolbarModule,
    BrowserAnimationsModule
  ],
  providers: [CardIDService],
  bootstrap: [AppComponent]
})
export class AppModule { }
