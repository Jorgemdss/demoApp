import { HttpClient, HttpHeaders } from '@angular/common/http';
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
    // var headers = new HttpHeaders();
    // headers.append('Content-Type', 'application/json; charset=utf-8');
    // headers.append('Accept', 'application/json');
    // headers.append('Authorization', 'Bearer CfDJ8NTef07WxrNGg5-c21xUcyzGboIwJedHTCnTCfLgfB4Pq9JBg0cb-qSXAOKajD5DKnSVMiACLHBZtN7LG2reWkyLY9HoILP_YoPObDOjle_E2K_UIW30_qCAsTuhGRCzmQV6ixiDTyQGZT9ikdz-4gT6ZQD-OQaEv_3gBIUxs_8IjU98WSzTRwVPeF9ClmFbOycF8y9YEd6oIu4oUZESk0-cKb6SiS2KfW_Rqvu5MULE8w49EvUU660pJP1XbZxmwLpyCE9GjMlkxCXJnschVFnbZp09MNwduAf-5I965X_JZM5EhU7swxYLD2I_q1rx8RHu_CsadLy2XbNYs1sQY2e1hkD-MNCRkgEwQBz3mxDvilx_M0qp8-ftM0aZZpc3ac-YZSL5iLtvboHoZQ8rZg1sgI0YWfSPQaffxNTaM9jHZBrSvkP9GrcM5H1TmCZD1JHX8C7waqeYyw3_LjWiYQHacUUKHUGX-u_eJgdNtePWET58FlpYrlxZrhHfRVni0yJzPcpI9WsV4uWoSHK4JE7Hb1tnw6QZ3BHecognHHLwEhG4LzLtHrFYYxsHgPRdjvkCzXCjmWYMwOU34ODR0Ja3z2_PQf4Wl8N0zGPYrErb_nTwDdlCfDe4FKpVWlTfYCDRVLVLNmrAImsFypXqAPtH3UWyRrP-M4SUhJkdnJZDUwfcj3yjv68GMb_tVEOGUQ');
    // console.log(headers);


    const headers2 = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
      'Accept': 'application/json',
      'Authorization': 'Bearer CfDJ8NTef07WxrNGg5-c21xUcyzGboIwJedHTCnTCfLgfB4Pq9JBg0cb-qSXAOKajD5DKnSVMiACLHBZtN7LG2reWkyLY9HoILP_YoPObDOjle_E2K_UIW30_qCAsTuhGRCzmQV6ixiDTyQGZT9ikdz-4gT6ZQD-OQaEv_3gBIUxs_8IjU98WSzTRwVPeF9ClmFbOycF8y9YEd6oIu4oUZESk0-cKb6SiS2KfW_Rqvu5MULE8w49EvUU660pJP1XbZxmwLpyCE9GjMlkxCXJnschVFnbZp09MNwduAf-5I965X_JZM5EhU7swxYLD2I_q1rx8RHu_CsadLy2XbNYs1sQY2e1hkD-MNCRkgEwQBz3mxDvilx_M0qp8-ftM0aZZpc3ac-YZSL5iLtvboHoZQ8rZg1sgI0YWfSPQaffxNTaM9jHZBrSvkP9GrcM5H1TmCZD1JHX8C7waqeYyw3_LjWiYQHacUUKHUGX-u_eJgdNtePWET58FlpYrlxZrhHfRVni0yJzPcpI9WsV4uWoSHK4JE7Hb1tnw6QZ3BHecognHHLwEhG4LzLtHrFYYxsHgPRdjvkCzXCjmWYMwOU34ODR0Ja3z2_PQf4Wl8N0zGPYrErb_nTwDdlCfDe4FKpVWlTfYCDRVLVLNmrAImsFypXqAPtH3UWyRrP-M4SUhJkdnJZDUwfcj3yjv68GMb_tVEOGUQ'
    });
    console.log(headers2);


    this.httpClient.get<User[]>('http://localhost:5069/api/User', { headers: headers2 })
      .subscribe(d => {
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
