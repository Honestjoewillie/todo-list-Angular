import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from '../../models/todos.model';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {}

  setClasses() {
    let classes = {
      todo: true,
      'is-completed': this.todo.completed,
    };
    return classes;
  }

  onToggle(todo) {
    //UI toggle
    this.todo.completed = !this.todo.completed;
    //server toggle
    this.todoService
      .toggleCompleted(this.todo)
      .subscribe((todo) => console.log(todo));
  }

  onDelete(todo) {
    this.deleteTodo.emit(this.todo);
  }
}
