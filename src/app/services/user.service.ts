import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { AngularFirestore } from '@angular/fire/compat/firestore';

// import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private firestore: AngularFirestore) {}

  addButton: string = 'ADD';

  todoList: any;

  //   form: FormGroup = new FormGroup({
  //     key: new FormControl(''),
  //     title: new FormControl('', Validators.required),
  //     description: new FormControl('', Validators.required),
  //   });

  getTodoList() {
    this.todoList = this.firestore.firestore.collection('user-info');
    return this.todoList;
  }

  insertTodo(data: any) {
    this.todoList.doc().set({
      name: data.name,
      message: data.message,
      date: data.date,
      id: data.id,
    });
  }

  editTodoList(todo: any) {
    // this.form.patchValue(todo);
    // this.addButton = 'UPDATE';
  }

  deleteTodoList($key: string) {
    this.todoList.remove($key);
  }
  resetForm() {
    this.addButton = 'ADD';
    // this.form.reset();
  }
}
