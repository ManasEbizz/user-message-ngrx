import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessagesPromptDialogueComponent } from './messages-prompt-dialogue/messages-prompt-dialogue.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { MatTableModule } from '@angular/material/table';

const MaterialModules = [
  MatDialogModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatSelectModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatIconModule,
  MatTableModule,
];

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    MessagesPromptDialogueComponent,
  ],
  imports: [
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyAPzO8Nnwt-HR_dD9FgbueCuMzdXrkP3-Y',
      authDomain: 'test-task-c6d4f.firebaseapp.com',
      databaseURL:
        'https://test-task-c6d4f-default-rtdb.asia-southeast1.firebasedatabase.app',
      projectId: 'test-task-c6d4f',
      storageBucket: 'test-task-c6d4f.appspot.com',
      messagingSenderId: '66464392707',
      appId: '1:66464392707:web:0e70d9147aa86776d95036',
      measurementId: 'G-LK1YEN7ED7',
    }),
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,

    MaterialModules,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
