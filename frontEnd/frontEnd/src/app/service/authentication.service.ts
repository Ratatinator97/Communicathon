import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';//Utiliser pour asychorous function ou donnee
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';



export interface UserDetail{
  _id:string;
  nom:string;
  prenom:string;
  email:string;
  exp:number;
  iat:number;
}

interface TokenResponse{
	token:string;
}
export interface TokenPayload{
	email:string;
	password:string;
	nom?:string;//? signifique optionel element
	prenom?:string;
}
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private token:string;
  uri = 'http://localhost:4000';//url pour connecter au server
  constructor(private http:HttpClient,private route:Router) {}

  //Enlever et Storer le token dans le localStorage du server
  private saveToken(token:string):void{
  	localStorage.setItem('mean-token',token);
  	this.token=token;
  }
/*Exemple un token 
 eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI1NWQ0MjNjMTUxMzcxMmNkMzE3YTRkYTciLCJlbWFpbCI6InNpbW9uQGZ1bGxzdGFja3RyYWluaW5nLmNvbSIsIm5hbWUiOiJTaW1vbiBIb2xtZXMiLCJleHAiOjE0NDA1NzA5NDUsImlhdCI6MTQzOTk2NjE0NX0.jS50GlmolxLoKrA_24LDKaW3vNaY94Y9EqYAFvsTiLg
*/
  private getToken():string{
  	if(!this.token){
  		this.token=localStorage.getItem('mean-token');
  	}
  	return this.token;
  }
  //Prendre l info des utilisateurs, pas forcement necessaire
  public getUserDetails():UserDetail{
  	const token=this.getToken();
  	let payload;
  	if(token){
  		payload=token.split('.')[1];//Prendre la partie payload dans le token 
  		payload=window.atob(payload);//decoder le token en string
  		return JSON.parse(payload);//encoder le token en json
  	}else{
  		return null;
  	}
  }
  //Determiner si l user est logged in 
  public isLoggedIn():boolean{
     const user =this.getUserDetails();
     if(user){
     	return user.exp>Date.now()/1000;
     }else{
     	return false;
     }
  }
  //L'URL doit etre coherent à celui dans back end
  private request(method: 'post'|'get', type: 'login'|'register'|'profile', user?: TokenPayload): Observable<any>{
  	let base;
  	if(method==='post'){
  		base=this.http.post(`${this.uri}/api/${type}`,user);

  	}else{
        base = this.http.get(`${this.uri}/api/${type}`);
        //le navigateur doit envoyer le token dans headers pour etre authorise dans le server pour le method get 	
    }
    //Pour chaque requete, s il est legal(il y a un token) il va etre sauvegarder dans le local memeoire 
     const request =base.pipe(
     map((data:TokenResponse)=>{
     	if(data.token){
     		this.saveToken(data.token);
     	}
     	return data;
     })
     );
     return request;     
  }
  //Fonction pour register
  public register(user:TokenPayload):Observable<any>{
  	return this.request('post','register',user);
  }
  //Fonction pour login
  public login(user: TokenPayload): Observable<any> {
    return this.request('post', 'login', user);
  }
  //Fonction pour profile
  public profile(): Observable<any> {
    return this.request('get', 'profile');
  }
  //Effacer le token quand logout
  public logout():void{
  	this.token='';
  	window.localStorage.removeItem('mean-token');
  	this.route.navigateByUrl('/');
  }
}
