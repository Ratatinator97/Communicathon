import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './service/auth-guard.service';

import { HomeComponent } from './home/home.component';

import { HomeIconesComponent } from './home/home-icones/home-icones.component'

import { CardIDList } from './card-id/list/list.component';
import { CardIDEdit } from './card-id/edit/edit.component';

import { LinkList } from './liens/liste/liste.component';
import { LinkCreate } from './liens/new/new.component';

import { FicheWEList } from './fiches/listes/listes.component';
import { FicheWEEdit } from './fiches/edite/edite.component';
import { FicheWECreate } from './fiches/nouveau/nouveau.component';

import { EmailComponent } from './email/email.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

const routes: Routes = [
    { path: '', component: ToolbarComponent, canActivate: [AuthGuardService], children: [
        { path: '', component: HomeComponent},
        { path: 'cardid',children: [{path:'list', component: CardIDList}, {path: 'edit', component: CardIDEdit}]}, 
        { path: 'links', children: [{path:'list', component: LinkList}, {path:'create', component: LinkCreate}]},
        { path: 'ficheWE', children: [{path: 'list', component: FicheWEList}, {path: 'create', component: FicheWECreate}, {path: 'edit', component: FicheWEEdit}]},
        { path: 'image', component: EmailComponent }
    ] },
  ]; 
  
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class SignedInRoutingModule { }
  