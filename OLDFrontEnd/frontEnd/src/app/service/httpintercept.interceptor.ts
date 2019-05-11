import { Injectable } from '@angular/core';
import {ErrordialogService} from '../errordialog/errordialog.service';
import {
    HttpInterceptor,
    HttpRequest,
    HttpResponse,
    HttpHandler,
    HttpEvent,
    HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {
	
	constructor(public errorDialog:ErrordialogService) {}
	
	intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
        const token :string =localStorage.getItem('mean-token');
        if(token){
        	request=request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + token) });

        }
        //Set Content-type and Accept
        //if (!request.headers.has('Content-Type')) {
            //request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });}

        //request = request.clone({ headers: request.headers.set('Accept', 'application/json') });
        return next.handle(request).pipe(
        	map((event:HttpEvent<any>)=>{
               if (event instanceof HttpResponse){
               	console.log('event = ',event);
               }
               return event;
        	}), 
        	catchError((error:HttpErrorResponse)=>{
        		let data={};
        		data ={
        			reason: error && error.error.reason ? error.error.reason : '',
                    status: error.status,
                    message: error && error.error.message ? error.error.message : ''
        		};
        		this.errorDialog.openDialog(data);
        		return throwError(error);
        	}));
	}
}