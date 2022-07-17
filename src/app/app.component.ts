import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { APIService, Todo } from './API.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'amplify-app';
  public createForm: FormGroup;

  public todos: Array<Todo> = [];

  constructor(private api: APIService, private fb: FormBuilder) {
    this.createForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  private subscription: Subscription | null = null;

  async ngOnInit() {
    /* fetch todos when app loads */
    this.api.ListTodos().then((event) => {
      this.todos = event.items as Todo[];
    });

    /* subscribe to new todos being created */
    this.subscription = <Subscription>(
      this.api.OnCreateTodoListener.subscribe((event: any) => {
        const newTodo = event.value.data.onCreateTodo;
        this.todos = [newTodo, ...this.todos];
      })
    );
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    this.subscription = null;
  }


  public onCreate(todo: Todo) {
    console.log("onCreate")
    console.log(todo)
    this.api
      .CreateTodo(todo)
      .then((event) => {
        console.log('item created!');
        this.createForm.reset();
      })
      .catch((e) => {
        console.log('error creating todo...', e);
      });
  }
}
