import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FirebaseService } from '../firebase.service';
import { MessagesPromptDialogueComponent } from '../messages-prompt-dialogue/messages-prompt-dialogue.component';
import { UserService } from '../services/user.service';
import { map } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
})
export class MessagesComponent implements OnInit, AfterViewInit {
  dataFromDialog: any;
  userData: any = [];
  displayedColumns: string[] = ['id', 'name', 'message', 'date'];
  messagesData: any = [];

  constructor(
    private dialog: MatDialog,
    private firebaseService: FirebaseService,
    private _snackBar: MatSnackBar,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.userService
      .getTodoList()
      .get()
      .then((querySnapshot: any) => {
        querySnapshot.forEach((doc: any) => {
          this.userData.push(doc.data());
          this.messagesData = this.userData;
          console.log('^^ UserData :: ', this.messagesData);
        });
      });
  }

  ngAfterViewInit(): void {}

  showPrompt(): void {
    const dialogRef = this.dialog.open(MessagesPromptDialogueComponent, {
      width: '350px',
      height: '400px',
    });

    dialogRef.afterClosed().subscribe((data) => {
      console.log('DATAA :: ', data);
      if (data) {
        this.openSnackBar('New Message Added Successfully !!', ' ');
        this.dataFromDialog = data.form;
        this.messagesData.push(data.form);
        console.log(this.userData);
      } else {
      }
    });
  }

  parseDate(date: any) {
    return new Date(date.seconds * 1000);
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
    setTimeout(() => {
      this._snackBar.dismiss();
    }, 2000);
  }
}
