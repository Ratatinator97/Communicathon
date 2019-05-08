import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardIDService } from './service/card-id.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListComponent } from './card-id/list/list.component';
import { EditComponent } from './card-id/edit/edit.component';
import { CreateComponent } from './card-id/create/create.component';
import { HttpClientModule , HTTP_INTERCEPTORS} from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { RegistreComponent } from './registre/registre.component';
import { HomeComponent } from './home/home.component';
import { AuthenticationService } from './service/authentication.service';
import { AuthGuardService } from './service/auth-guard.service';
import { ErrordialogService } from './errordialog/errordialog.service';
import { HttpConfigInterceptor} from './service/httpintercept.interceptor';
import { ErrorDialogComponent } from './errordialog/errordialog.component';
import { MatDialogModule } from '@angular/material';
import { ShowHidePasswordModule } from 'ngx-show-hide-password';
import { MatToolbarModule, 
  MatFormFieldModule, 
  MatInputModule, 
  MatOptionModule, 
  MatSelectModule, 
  MatIconModule, 
  MatButtonModule, 
  MatCardModule, 
  MatTableModule, 
  MatDividerModule,
  MatSnackBarModule,
  MatDatepickerModule,
  MatNativeDateModule  } from '@angular/material';
  
const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'register', component: RegistreComponent },
  { path: 'home', component: HomeComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuardService] },

  { path: 'cardID/create', component: CreateComponent },
  { path: 'cardID/edit/:id', component: EditComponent },
  { path: 'cardID/list', component: ListComponent }
];  

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    EditComponent,
    CreateComponent,
    ProfileComponent,
    LoginComponent,
    RegistreComponent,
    HomeComponent,
    ErrorDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ShowHidePasswordModule,
    //AppRoutingModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatDialogModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatDividerModule,
    MatSnackBarModule,
    MatDatepickerModule,
    MatNativeDateModule 
  ],
  providers: [
    CardIDService,
    AuthenticationService, 
    AuthGuardService,
    ErrordialogService,
    { provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true }
       
  ],
  entryComponents: [ErrorDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
