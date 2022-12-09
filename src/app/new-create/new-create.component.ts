import { Component, Input, OnInit } from '@angular/core';
// import { Edge } from 'dagre';
import * as shape from 'd3-shape';
import {  Node } from '@swimlane/ngx-graph/lib//models';
import { Edge, Layout } from '@swimlane/ngx-graph/lib/models';
import { DagreNodesOnlyLayout } from '../custom-create/xc';
@Component({
  selector: 'app-new-create',
  templateUrl: './new-create.component.html',
  styleUrls: ['./new-create.component.css']
})
export class NewCreateComponent implements OnInit {

  
  @Input() employees: any[] = [];
  
  public nodes: Node[] = [];
  public links: Edge[] = [];
  public layoutSettings = {
    orientation: 'TB'
  };
  public curve: any = shape.curveLinear;
  public layout: Layout = new DagreNodesOnlyLayout();
  public tracability = [
    {
                "id": 1,
                "fromTechnology": 1,
                "toTechnology": 2,
                "fromArtifact": "BacklogItem",
                "toArtifact": "ChangeSet",
                "relationship": "pending",
                "status": null,
                "notes": null,
                "updatedBy": "VSAKTHIP",
                "updated": "2022-11-18T11:48:15.313394+05:30"
    },{
      "id": 2,
      "fromTechnology": 1,
      "toTechnology": 2,
      "fromArtifact": "BacklogItem",
      "toArtifact": "ChangeSet",
      "relationship": "pending",
      "status": null,
      "notes": null,
      "updatedBy": "VSAKTHIP",
      "updated": "2022-11-18T11:48:15.313394+05:30"
},{
      "id": 3,
      "fromTechnology": 1,
      "toTechnology": 3,
      "fromArtifact": "BacklogItem",
      "toArtifact": "Screen",
      "relationship": "pending",
      "status": null,
      "notes": null,
      "updatedBy": "VSAKTHIP",
      "updated": "2022-11-18T11:48:15.313394+05:30"


    },{
      "id": 4,
      "fromTechnology": 2,
      "toTechnology": 4,
      "fromArtifact": "Screen",
      "toArtifact": "Document",
      "relationship": "pending",
      "status": null,
      "notes": null,
      "updatedBy": "VSAKTHIP",
      "updated": "2022-11-18T11:48:15.313394+05:30"
    }]

    clusters :any=[ {
      id: 'cluster0',
      label: 'Cluster node',
      childNodeIds: [2, 3]
    }];
  constructor() {

    for(const trace of this.tracability){
      
     const node :any = {
      id: trace.id,
      label: trace.fromArtifact
     }

     

     if(this.nodes.find(e=>e.label == trace.fromArtifact)){
      const node1 :any = {
        id: trace.id,
        label: trace.toArtifact
       }
       this.nodes.push(node1);
     }else{
      this.nodes.push(node);
     }

    }
console.log(" nodes ",this.nodes);

    for(const trace of this.tracability){
      const edge:  any  = {
        source: trace.fromTechnology,
        target: trace.toTechnology,
        data: {
          linkText: 'Manager of'
        }
      }
      ;
      this.links.push(edge);
    }


   }

  ngOnInit(): void {
  }


  public cricleCall(){
    console.log(" Hi I am Boobalan ");
    
        }

}
