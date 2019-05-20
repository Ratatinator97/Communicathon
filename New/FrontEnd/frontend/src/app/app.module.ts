import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardIDService } from './service/card-id.service';
import { ficheWEservice } from './service/fiche.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListComponent } from './card-id/list/list.component';
import { EditComponent } from './card-id/edit/edit.component';
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
import {FlexLayoutModule} from '@angular/flex-layout';
import {EmailService } from './service/email.service';
import { ActivatedRoute } from '@angular/router';

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
import { MatGridListModule } from '@angular/material/grid-list';
import { ListeComponent } from './liens/liste/liste.component';
import { NewComponent } from './liens/new/new.component';
import { HomeIconesComponent } from './home/home-icones/home-icones.component';
import { IconeHomeService } from './service/icone-home.service';
import { ListesComponent } from './fiches/listes/listes.component';
import { EditeComponent } from './fiches/edite/edite.component';
import { NouveauComponent } from './fiches/nouveau/nouveau.component';
import { EmailComponent } from './email/email.component';
import { ForgetpwComponent } from './forgetpw/forgetpw.component';
const routes: Routes = [
  { path: '', redirectTo:'login', pathMatch: 'full' },
  {path: 'login', component: LoginComponent },
  { path: 'register', component: RegistreComponent },
  { path: 'reset', component: ForgetpwComponent },
  { path: 'home/:nom', component: HomeComponent,canActivate: [AuthGuardService] },
  {path:  'home/:nom/image',component:EmailComponent ,canActivate: [AuthGuardService]},
  { path: 'home/:nom/cardID/edit', component: EditComponent ,canActivate: [AuthGuardService]},
  { path: 'home/:nom/cardID/list', component: ListComponent ,canActivate: [AuthGuardService]},
  { path: 'home/:nom/liens/liste', component: ListeComponent ,canActivate: [AuthGuardService]},
  { path: 'home/:nom/liens/new', component: NewComponent,canActivate: [AuthGuardService]},
  { path: 'home/:nom/fiches/nouveau', component: NouveauComponent,canActivate: [AuthGuardService] },
  { path: 'home/:nom/fiches/edite', component: EditeComponent ,canActivate: [AuthGuardService]},
  { path: 'home/:nom/fiches/listes', component: ListesComponent ,canActivate: [AuthGuardService]}
];  


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    EditComponent,
    ProfileComponent,
    LoginComponent,
    RegistreComponent,
    HomeComponent,
    ListeComponent,
    NewComponent,
    ErrorDialogComponent,
    HomeIconesComponent,
    ListesComponent,
    EditeComponent,
    NouveauComponent,
    EmailComponent,
    ForgetpwComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ShowHidePasswordModule,
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
    MatNativeDateModule,
    MatGridListModule,
    FlexLayoutModule
  ],
  providers: [
    CardIDService,
    AuthenticationService, 
    AuthGuardService,
    ErrordialogService,
    IconeHomeService,
    ficheWEservice,
    EmailService,
    { provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true }
       
  ],
  entryComponents: [ErrorDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
