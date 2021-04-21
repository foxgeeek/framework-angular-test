import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ToDo } from "src/app/core/models";
import { TodoService } from "src/app/core/services";
import { SubSink } from 'subsink';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit, OnDestroy {

  public todos: ToDo[];
  public todoId: number;
  public spinnerActive: boolean = false;

  private subs = new SubSink();

  constructor(
    private toDoService: TodoService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getToDos();
  }

  openPhoto(id: number) {
    this.router.navigateByUrl(`photo/${id}`);
  }

  getToDos() {
    this.spinnerActive = true;
    this.subs.sink = this.toDoService.getTodos().subscribe(todos => {
      this.todos = todos;
      this.spinnerActive = false;
      window.scrollTo(0, 0);
    })
  }

  getUser(id: number) {
    this.router.navigateByUrl(`user/${id}`);
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

}
