import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {
  public usersData?: User[];
  constructor(
    private readonly httpClient: HttpClient
  ) { }

  public makeCall() {
    this.httpClient.get<User[]>('http://localhost:5069/api/User').subscribe(d => {
      this.usersData = d;
    });
  }
}

export type User = {
  id: number,
  name: string,
  dateOfBirth?: Date
  roles?: Role[]
}

export type Role = {
  id: number,
  name: string
}
