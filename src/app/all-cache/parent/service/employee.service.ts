import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Employee } from './employee';

@Injectable()
export class EmployeeService {
  constructor(private http: HttpClient) {}

  getEmployees() {
    return this.http.get<any[]>('assets/employees.json');
  }
}
