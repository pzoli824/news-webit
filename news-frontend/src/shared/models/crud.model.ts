import { Observable } from "rxjs";

export interface CRUD<T> {
  getAll(): Observable<Array<T>>
}