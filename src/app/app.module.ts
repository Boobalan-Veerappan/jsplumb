import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxGraphModule } from '@swimlane/ngx-graph';
// import { NgxGraphModule } from '@swimlane/ngx-graph/lib/ngx-graph.module';
// import { NgxGraphModul } from 'ngx-graph';
// import { NgxGraphModule } from '@swimlane/ngx-graph';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomCreateComponent } from './custom-create/custom-create.component';
import { NewCreateComponent } from './new-create/new-create.component';
import { NgxGraphComponent } from './ngx-graph/ngx-graph.component';
import { JsplumbComponent } from './jsplumb/jsplumb.component';
import { GojsComponent } from './gojs/gojs.component'
// import {TooltipModule} from 'primeng/tooltip';
// import { GojsAngularModule } from 'gojs-angular';

@NgModule({
  declarations: [
    AppComponent,
    CustomCreateComponent,
    NewCreateComponent,
    NgxGraphComponent,
    JsplumbComponent,
    GojsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxGraphModule,
    BrowserAnimationsModule,
    // GojsAngularModule
    // TooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
