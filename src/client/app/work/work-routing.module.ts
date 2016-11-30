import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WorkComponent } from './work.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'work/:work_id', component: WorkComponent }
    ])
  ],
  exports: [RouterModule]
})
export class WorkRoutingModule { }
