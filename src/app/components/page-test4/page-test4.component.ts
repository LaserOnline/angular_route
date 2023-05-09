import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, ParamMap, RouterModule } from '@angular/router';

@Component({
  selector: 'app-page-test4',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './page-test4.component.html',
  styleUrls: ['./page-test4.component.scss'],
})
export class PageTest4Component implements OnInit {
  id: number = 0;
  name: string = '';
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.id += Number(params.get('id'));
      this.name += params.get('name');
    });
  }
}
