import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Employee {
  'Employee ID': any;
  'Employee Name': any;
  'Dedalus ID': any;
  visible: boolean;

}

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private dataUrl = 'https://myapi-b7ad2-default-rtdb.asia-southeast1.firebasedatabase.app/data.json';

  constructor(private http: HttpClient) {}

  getData(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.dataUrl);
  }
}
