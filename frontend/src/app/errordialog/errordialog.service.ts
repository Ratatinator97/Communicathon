import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ErrorDialogComponent } from './errordialog.component';
@Injectable({
  providedIn: 'root'
})

// Ce service permet d'afficher les erreurs a l'ecran 
export class ErrordialogService {

	constructor(public dialog:MatDialog) { }
  openDialog(data):void{
  	const open=this.dialog.open(ErrorDialogComponent,{
  		width:'400px',
  		data:data
  	});
  	open.afterClosed().subscribe(result=>{
  		let things;
  		things=result;
  		console.log(things);
  	})
  }
}
