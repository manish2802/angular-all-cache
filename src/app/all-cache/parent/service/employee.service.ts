import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class EmployeeService {
  constructor(private http: HttpClient) {}

  getEmployees() {
    return this.http.get<any[]>(
      'https://dummy.restapiexample.com/api/v1/employees'
    );
  }
}
