import { Component, OnInit } from '@angular/core';
import { filter, switchMap } from 'rxjs/operators';
import {ActivatedRoute, Router} from '@angular/router';
import { Location } from "@angular/common";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-lesson10';
  param1: any;

  constructor(private router: Router, private activeRouter: ActivatedRoute, private location: Location) { }
  ngOnInit(): void {
    this.activeRouter.paramMap.pipe(switchMap((params)=> params.getAll('param1')))
    .subscribe((data)=>{
      this.param1 = + data
    })
  }
  navigateTo(url) {
    this.location.go(url)
  }    goBack() {
    this.location.back()
  }    goForward() {
    this.location.forward()
  }


  // goMyProject() {
  //   this.router.navigate(['mod3'])
  // }
}
