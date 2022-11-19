import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, UrlSegment } from '@angular/router';
import { tap } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  url!: string;
  
  constructor(private router: ActivatedRoute) {}

  ngOnInit(): void {
    this.router.url
      .pipe(
        tap((value: UrlSegment[]) => {
          this.url = value[0].path;
        })
      )
      .subscribe();
  }
}
