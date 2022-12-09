import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JsplumbComponent } from './jsplumb/jsplumb.component';
import { NgxGraphComponent } from './ngx-graph/ngx-graph.component';

const routes: Routes = [{

  path:'',
  component:NgxGraphComponent

},{
  path:'jsplumb',
  component:JsplumbComponent
},{
  path:'ngxGraph',
  component:NgxGraphComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
