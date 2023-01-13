import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FirebaseService } from '../firebase.service';
import { MessagesPromptDialogueComponent } from '../messages-prompt-dialogue/messages-prompt-dialogue.component';
import { UserService } from '../services/user.service';
import { map } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';

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
  public isLoading = false;

  constructor(
    private dialog: MatDialog,
    private firebaseService: FirebaseService,
    private _snackBar: MatSnackBar,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.getMessages();
  }

  getMessages() {
    this.isLoading = true;
    this.userService
      .getTodoList()
      .get()
      .then((querySnapshot: any) => {
        querySnapshot.forEach((doc: any) => {
          this.userData.push(doc.data());
          this.messagesData = this.userData;
          console.log('^^ UserData :: ', this.messagesData);
          this.isLoading = false;
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
      this.isLoading = true;
      if (data) {
        this.openSnackBar('New Message Added Successfully !!', ' ');
        this.dataFromDialog = data.form;
        this.messagesData.push(data.form);

        setTimeout(() => {
          this.messagesData = new MatTableDataSource<any>(this.messagesData);
          this.isLoading = false;
        }, 1000);
      } else {
        this.isLoading = false;
      }
    });
  }

  parseDate(date: any) {
    console.log('DATE :: ', typeof date);
    return date.seconds ? new Date(date.seconds * 1000) : '';
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
    setTimeout(() => {
      this._snackBar.dismiss();
    }, 1000);
  }
}
