import { Component } from '@angular/core';
import * as shape from 'd3-shape';
import { Edge } from '@swimlane/ngx-graph/lib/models';
import { Layout } from '@swimlane/ngx-graph/lib/models';
import { ClusterNode } from '@swimlane/ngx-graph/lib/models';
import { Subject } from 'rxjs';
import { nodes, clusters, links } from './data'
import { Router } from '@angular/router';
// import { Edge, Node, ClusterNode, Layout } from '@swimlane/ngx-graph';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {



  title = 'demo';
  name = 'NGX-Graph Demo';

  nodes: any[] = nodes;
  clusters: ClusterNode[] = clusters;

  links: Edge[] = links;
  
  layout: string | Layout = 'dagreCluster';
  layouts: any[] = [
    {
      label: 'Dagre',
      value: 'dagre',
    },
    {
      label: 'Dagre Cluster',
      value: 'dagreCluster',
      isClustered: true,
    },
    {
      label: 'Cola Force Directed',
      value: 'colaForceDirected',
      isClustered: true,
    },
    {
      label: 'D3 Force Directed',
      value: 'd3ForceDirected',
    },
  ];


  // line interpolation
  curveType: string = 'Bundle';
  curve: any = shape.curveLinear;
  interpolationTypes = [
    'Bundle',
    'Cardinal',
    'Catmull Rom',
    'Linear',
    'Monotone X',
    'Monotone Y',
    'Natural',
    'Step',
    'Step After',
    'Step Before'
  ];  
constructor(private router: Router){

}


  draggingEnabled: boolean = true;
  panningEnabled: boolean = true;
  zoomEnabled: boolean = true;

  zoomSpeed: number = 0.1;
  minZoomLevel: number = 0.1;
  maxZoomLevel: number = 4.0;
  panOnZoom: boolean = true;

  autoZoom: boolean = false;
  autoCenter: boolean = false; 

  update$: Subject<boolean> = new Subject();
  center$: Subject<boolean> = new Subject();
  zoomToFit$: Subject<boolean> = new Subject();

  gotoRoute(link:string){

    this.router.navigate([link]);
  }

}
