import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Employee } from './employee';

@Injectable()
export class EmployeeService {
  constructor(private http: HttpClient) {}

  coustomObservable(): Observable<any> {
    return new Observable((observer) => {
      observer.next({ name: 'manish', phone: '34344' });
      observer.error('error');
      observer.complete();
      return {
        unsubscribe() {},
      };
    });
  }

  getEmployees() {
    return this.http.get<Employee[]>('assets/employees.json');
  }
}

function unsubscribe(): any {
  throw new Error('Function not implemented.');
}
