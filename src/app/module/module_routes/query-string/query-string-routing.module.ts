import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from '../../routes/query-string.rutes';

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QueryStringRoutingModule {}
