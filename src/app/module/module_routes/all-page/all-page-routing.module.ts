import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from '../../routes/page.router';

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllPageRoutingModule {}
