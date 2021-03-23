import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/internal/operators/map';
import { Issues } from './mod4/issues.interface';

@Injectable({
  providedIn: 'root',
})
export class AppServiceService {
  options = {
    headers: new HttpHeaders().append(
      'Authorization',
      'Basic ' + btoa('STihn:763c74097b0e87f7b7d76eb68295b2011cea46a7')
    ),
  };

  constructor(private http: HttpClient) {}

  getIssues() {
    return this.http.get(
      'https://api.github.com/repos/STihn/angular-lesson10/issues'
    );
  }

  postIssues(issue: Issues) {
    return this.http
      .post(
        'https://api.github.com/repos/STihn/angular-lesson10/issues',
        {
          ...issue,
          owner: 'STihn',
          repo: 'angular-lesson10',
        },
        this.options
      )
      .pipe(
        map((data) => {
          console.log('post', data);
          return data;
        })
      )
      .subscribe((data) => {
        console.log('post', data);
      });
  }

  closeIssure(issueNumber): void {
    this.http
      .put(
        'https://api.github.com/repos/STihn/angular-lesson10/issues/' +
          issueNumber +
          '/lock',
        {
          owner: 'STihn',
          repo: 'angular-lesson10',
          issue_Number: issueNumber,
          lock_reasson: 'resolved',
        },
        this.options
      )
      .subscribe((data) => {
        console.log(data);
      });

    this.http
      .patch(
        'https://api.github.com/repos/STihn/angular-lesson10/issues/' +
          issueNumber,
        {
          owner: 'STihn',
          repo: 'angular-lesson10',
          issue_Number: issueNumber,
          state: 'closed',
        },
        this.options
      )
      .subscribe((data) => {
        console.log(data);
      });
  }

  addComent(issueNumber, body): void {
    this.http
      .post(
        'https://api.github.com/repos/STihn/angular-lesson10/issues/' +
          issueNumber +
          '/comments',
        {
          owner: 'STihn',
          repo: 'angular-lesson10',
          issue_Number: issueNumber,
          body: body,
        },
        this.options
      )
      .subscribe((data) => {
        console.log(data);
      });
  }
}
