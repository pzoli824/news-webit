import { Observable } from "rxjs";

export interface CRUD<T> {
  getAll(): Observable<Array<T>>
  delete(v: T): Observable<void>
  update(v: T): Observable<T>
  create(v: T): Observable<T>
}