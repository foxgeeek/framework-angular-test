import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { TODOS, USERS } from "../api/app.api";

@Injectable()
export class TodoService {
  constructor(private http: HttpClient) {}

  getTodos() {
    return this.http.get<any>(`${TODOS}`);
  }

  getTodoId(id: number) {
    return this.http.get<any>(`${TODOS}/${id}`);
  }

  getUsers() {
    return this.http.get<any>(`${USERS}`);
  }

  getUserId(id: number) {
    return this.http.get<any>(`${USERS}/${id}`);
  }

}