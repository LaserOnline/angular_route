import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-page-test1',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './page-test1.component.html',
  styleUrls: ['./page-test1.component.scss'],
})
export class PageTest1Component {}
