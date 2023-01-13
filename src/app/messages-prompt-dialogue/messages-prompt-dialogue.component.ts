import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { map } from 'rxjs/operators';
import { UUID } from 'uuid-generator-ts';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-messages-prompt-dialogue',
  templateUrl: './messages-prompt-dialogue.component.html',
  styleUrls: ['./messages-prompt-dialogue.component.css'],
})
export class MessagesPromptDialogueComponent implements OnInit {
  public form: FormGroup;
  dataSource = [];
  uuid = new UUID();

  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) data: { message: string },
    public dialogRef: MatDialogRef<MessagesPromptDialogueComponent>,
    private userService: UserService
  ) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      message: ['', Validators.required],
      date: [''],
      id: [''],
    });
  }

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    this.form.patchValue({
      date: new Date(),
      id: this.uuid.toString(),
    });
    console.log('^^ form ::', this.form.value);

    this.dialogRef.close({
      clicked: 'submit',
      form: this.form.value,
    });

    this.userService.insertTodo(this.form.value);
  }
}
