import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, ParamMap, RouterModule } from '@angular/router';

@Component({
  selector: 'app-page-test5',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './page-test5.component.html',
  styleUrls: ['./page-test5.component.scss'],
})
export class PageTest5Component implements OnInit {
  id: number = 0;
  name: string = '';
  constructor(private activatedRoute: ActivatedRoute) {}
  ngOnInit(): void {
    this.activatedRoute.queryParamMap.subscribe((params: ParamMap) => {
      this.id = Number(params.get('id'));
      this.name += params.get('name');
    });
  }
}
