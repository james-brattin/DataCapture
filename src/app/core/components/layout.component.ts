import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { IodpLoginService, User } from 'iodplogin';
import { Observable, Subject, of } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  template: `
    <div>
        <header id="logged-in">
          <nav>
            <ng-container *ngIf="user$ | async; else geodesc">
              <a class="item" (click)="logout()">Logout</a>
            </ng-container>
            <ng-template #geodesc>
              <span>GEODESC</span>
            </ng-template>
          </nav>
            <span *ngIf="user$ | async" class="username">{{'User: ' + (user$ | async)?.username}}</span>
        </header>
        <main>
            <ng-content></ng-content>
            <p class="errors">{{errorMessage$ | async}}</p>
        </main>
    </div>
  `,
  styles: [`
    #logged-in {
      display: grid;
      grid-template-rows: 1fr;
      grid-template-columns: repeat(7, 1fr);
      width: 100%;
      position: fixed;
      top: 0px;
      left: 0;
      height: 40px;
      background-color: var(--primaryColor);
      text-align: center;
    }
    p {
      text-align: center;
      margin-top: 2em;
    }
    .item {
      cursor: pointer;
    }
    .username {
      place-self: center;
      grid-column-start: 6;
    }
    nav {
      place-self: center;
      grid-column: 1 / 2;
    }
    main {
      /* max-width: 1600px; */
      width: 100%;
      margin: 60px auto;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutComponent implements OnInit {
  user$: Observable<User>;
  loggedIn$: Observable<boolean>;
  errorMessage$: Observable<string>;
  destroy$ = new Subject<void>();
  storageUser: User;

  constructor(private auth: IodpLoginService, private router: Router) {
    this.auth.userSubject$.subscribe(val => {
      this.user$ = of(val);
    })
  }

  ngOnInit(): void {
    this.errorMessage$ = this.auth.errorMessage$;
  }

  logout() {
    this.auth.logout();
    this.user$ = of(null);
    this.router.navigate(['/login']);
  }
}
