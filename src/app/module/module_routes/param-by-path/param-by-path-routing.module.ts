import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from '../../routes/param-param-path.routes';

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParamByPathRoutingModule {}
