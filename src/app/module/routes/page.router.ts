import { Routes } from '@angular/router';
import { PageTest1Component } from 'src/app/components/page-test1/page-test1.component';

export const routes: Routes = [
  {
    path: '',
    component: PageTest1Component,
    children: [
      {
        path: '',
        redirectTo: 'navigate',
        pathMatch: 'prefix',
      },
      {
        path: 'navigate',
        loadChildren: () =>
          import('../module_routes/navigate/navigate.module').then(
            (m) => m.NavigateModule
          ),
      },
      {
        path: 'param-by-path/:name',
        loadChildren: () =>
          import('../module_routes/param-by-path/param-by-path.module').then(
            (m) => m.ParamByPathModule
          ),
      },
      {
        path: 'param',
        loadChildren: () =>
          import('../module_routes/param/param.module').then(
            (m) => m.ParamModule
          ),
      },
      {
        path: 'query-string',
        loadChildren: () =>
          import('../module_routes/query-string/query-string.module').then(
            (m) => m.QueryStringModule
          ),
      },
      {
        path: 'state',
        loadChildren: () =>
          import('../module_routes/state/state.module').then(
            (m) => m.StateModule
          ),
      },
    ],
  },
];
