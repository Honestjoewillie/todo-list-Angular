import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Todo } from '../models/todos.model';
import { Observable } from 'rxjs';

//for put request data
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todosUrl: string = 'https://jsonplaceholder.typicode.com/todos';
  todosLimit = '?_limit=11';

  constructor(private http: HttpClient) {}

  //GET request
  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.todosUrl}${this.todosLimit}`);
  }

  //DELETE request
  deleteTodo(todo: Todo): Observable<Todo> {
    const url = `${this.todosUrl}/${todo.id}`;
    return this.http.delete<Todo>(url, httpOptions);
  }

  //POST request
  addTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.todosUrl, todo, httpOptions);
  }

  //PUT request with url to update a specifc todo via id
  toggleCompleted(todo: Todo): Observable<any> {
    const url = `${this.todosUrl}/${todo.id}`;
    return this.http.put(url, todo, httpOptions);
  }
}
