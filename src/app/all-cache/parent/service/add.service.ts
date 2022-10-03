import { Injectable } from '@angular/core';

@Injectable()
export class AddService {
  constructor() {}

  addBoi(n1: number, n2: number) {
    return n1 + n2;
  }
}
