import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  Router,
} from '@angular/router';

@Component({
  selector: 'app-page-test6',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './page-test6.component.html',
  styleUrls: ['./page-test6.component.scss'],
})
export class PageTest6Component implements OnInit {
  id?: number;
  name?: string;

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras.state;
    this.id = state?.['id'];
    this.name = state?.['name'];
  }

  ngOnInit() {}
}
