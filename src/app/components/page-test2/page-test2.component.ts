import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-page-test2',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './page-test2.component.html',
  styleUrls: ['./page-test2.component.scss'],
})
export class PageTest2Component {
  username: string = 'LaserOnline';
  constructor(private router: Router) {}
  public sendByParam(): void {
    this.router.navigate(['/pages/param-by-path', this.username]);
  }

  public sendParam(): void {
    this.router.navigate([
      '/pages/param',
      { id: 1, name: 'Value Form Type Script' },
    ]);
  }

  NavigateToQueryString() {
    this.router.navigate(['/pages/query-string'], {
      queryParams: { id: 1, name: 'hello-query-string' },
    });
  }

  NavigateToState() {
    this.router.navigateByUrl('/page/state', {
      state: { id: 1, name: 'LaserOnline' },
    });
  }

  GotoState() {
    const navigationExtras = {
      state: {
        id: 1,
        name: 'LaserOnline',
      },
    };
    this.router.navigate(['pages/state'], navigationExtras);
  }
}
