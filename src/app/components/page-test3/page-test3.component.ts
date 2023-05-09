import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, ParamMap, RouterModule } from '@angular/router';

@Component({
  selector: 'app-page-test3',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './page-test3.component.html',
  styleUrls: ['./page-test3.component.scss'],
})
export class PageTest3Component implements OnInit {
  public username: string = '';
  constructor(private activatedRoute: ActivatedRoute) {}
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      // * param/:name
      alert(params.get('name'));
      this.username += params.get('name');
    });

    // this.username = this.route.snapshot.params['name'];
  }
}
