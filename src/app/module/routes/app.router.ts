import { Routes } from '@angular/router';
import { PageHomeComponent } from 'src/app/components/page-home/page-home.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    component: PageHomeComponent,
  },
  {
    path: 'pages',
    loadChildren: () =>
      import('../module_routes/all-page/all-page-routing.module').then(
        (m) => m.AllPageRoutingModule
      ),
  },
  {
    path: '**',
    loadComponent: () =>
      import('../../components/page-oops/page-oops.component').then(
        (m) => m.PageOopsComponent
      ),
  },
];
