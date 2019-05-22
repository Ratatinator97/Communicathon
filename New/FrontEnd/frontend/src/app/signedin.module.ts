import { NgModule } from '@angular/core';

import { AuthenticationService } from './service/authentication.service';
import { AuthGuardService } from './service/auth-guard.service';
import {MatIconModule} from '@angular/material';

import { HomeIconesComponent } from './home/home-icones/home-icones.component';
import { HomeComponent } from './home/home.component';
import { HomeIconeService } from './service/icone-home.service'

import { CardIDService } from './service/card-id.service';
import { CardIDList } from './card-id/list/list.component';
import { CardIDEdit } from './card-id/edit/edit.component';

import { LinkList } from './liens/liste/liste.component';
import { LinkCreate } from './liens/new/new.component';
import { LienService } from './service/lien.service';

import { FicheWEList } from './fiches/listes/listes.component';
import { FicheWEEdit } from './fiches/edite/edite.component';
import { FicheWECreate } from './fiches/nouveau/nouveau.component';
import { ficheWEservice } from './service/fiche.service';

import { EmailComponent } from './mail/email/email.component';
import {UploadComponent} from './mail/upload/upload.component';

import { EmailService } from './service/email.service';

import { SignedInRoutingModule } from './signedin-routing.module';
import { CommonModule } from '@angular/common';

import { ToolbarComponent } from './toolbar/toolbar.component';

import {FlexLayoutModule} from '@angular/flex-layout';
import { MatToolbarModule, 
  MatFormFieldModule, 
  MatInputModule, 
  MatOptionModule, 
  MatSelectModule, 
  MatButtonModule, 
  MatCardModule, 
  MatTableModule, 
  MatDividerModule,
  MatSnackBarModule,
  MatDatepickerModule,
  MatNativeDateModule  } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';




@NgModule({


    imports: [ // modules which app will use after login
        CommonModule,
        SignedInRoutingModule,
        MatIconModule, 
        MatToolbarModule,
        MatFormFieldModule,
        MatInputModule,
        MatOptionModule,
        MatSelectModule,
        MatButtonModule,
        MatCardModule,
        MatTableModule,
        MatDividerModule,
        MatSnackBarModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatGridListModule,
        FlexLayoutModule,
        FormsModule,
        ReactiveFormsModule
    ],

    providers: [ // services which app will use after login
        CardIDService,
        AuthenticationService, 
        AuthGuardService,
        HomeIconeService,
        ficheWEservice,
        EmailService,
        LienService
    ],
    declarations: [ // your components which app will use after login.
        
        CardIDList,
        CardIDEdit,
        HomeComponent,
        LinkList,
        LinkCreate,
        ToolbarComponent,
        HomeIconesComponent,
        FicheWECreate,
        FicheWEEdit,
        FicheWEList,
        EmailComponent,
        UploadComponent
    ],
})
export class SignedInModule {}