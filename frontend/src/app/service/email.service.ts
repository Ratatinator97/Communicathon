import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';//Utiliser pour asychorous function ou donnee
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';


export interface ImageDetail{
  	  path:string,
      description:string,
      contenttype:string,
      state:boolean;
}

export class Images implements ImageDetail{
	public path:string;
    public description:string;
    public contenttype:string;
    public state:boolean;
    constructor( path:string,description:string,contenttype:string) {
        this.path = path;
        this.description = description;
        this.contenttype = contenttype;
        this.state =true;
    }
    
}


@Injectable({
  providedIn: 'root'
})

export class EmailService {
  uri = 'http://localhost:4000';//url pour connecter au server
  constructor(private http:HttpClient,private route:Router) {}
  
  public getImage():Observable<any>{
  	return this.http.get(`${this.uri}/api/pictomail`);
  }
  public sendImage(message:String):Observable<any>{
    return this.http.post(`${this.uri}/api/pictomail`,{message:message});
}
 public uploadImage(file: File,description:string): Observable<any> {
    const formData = new FormData();

    formData.append('file', file,file.name);
    formData.append('description', description);
    return this.http.post(`${this.uri}/api/pictomailupload`, formData);
  }
 
}
