import { Observable } from "rxjs";

export interface CRUD<T> {
  getAll(): Observable<Array<T>>
  delete(v: T): Observable<void>
  create(v: T): Observable<T>
}