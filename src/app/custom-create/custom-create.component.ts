import { Component, OnInit, Input } from '@angular/core';
import { Edge, Layout } from '@swimlane/ngx-graph/lib/models';
 import {  Node } from '@swimlane/ngx-graph/lib//models';
 import { DagreNodesOnlyLayout } from './xc';
import * as shape from 'd3-shape';
export class Employee {
  id: string='';
  name: string='';
  office: string='';
  role: string='';
  backgroundColor: string='';
  upperManagerId?: string;
}
@Component({
  selector: 'app-custom-create',
  templateUrl: './custom-create.component.html',
  styleUrls: ['./custom-create.component.css']
})
export class CustomCreateComponent implements OnInit {

  


    @Input() employees: Employee[] = [];
  
    public nodes: Node[] = [];
    public links: Edge[] = [];
    public layoutSettings = {
      orientation: 'TB'
    };
    public curve: any = shape.curveLinear;
    public layout: Layout = new DagreNodesOnlyLayout();
  
    constructor() {
      this.employees = [
        {
          id: '1',
          name: 'Employee 1',
          office: 'Office 1',
          role: 'Manager',
          backgroundColor: '#DC143C'
        },
        {
          id: '7',
          name: 'Employee 2',
          office: 'Office 2',
          role: 'Engineer',
          backgroundColor: '#00FFFF',
          upperManagerId: '1'
        },
        {
          id: '3',
          name: 'Employee 3',
          office: 'Office 3',
          role: 'Engineer',
          backgroundColor: '#00FFFF',
          upperManagerId: '1'
        },
        {
          id: '4',
          name: 'Employee 4',
          office: 'Office 4',
          role: 'Engineer',
          backgroundColor: '#00FFFF',
          upperManagerId: '1'
        },
        {
          id: '5',
          name: 'Employee 5',
          office: 'Office 5',
          role: 'Student',
          backgroundColor: '#8A2BE2',
          upperManagerId: '4'
        },
        {
          id: '6',
          name: 'Employee 6',
          office: 'Office 6',
          role: 'Student 6',
          backgroundColor: '#8A2BE2',
          upperManagerId: '1'
        }
      ];
    }
  
    public ngOnInit(): void {
      for (const employee of this.employees) {
        const node: any = {
          id: employee.id,
          label: employee.name,
          data: {
            office: employee.office,
            role: employee.role,
            backgroundColor: employee.backgroundColor
          }
        };
  
        this.nodes.push(node);
      }

      console.log(" Nodes ",this.nodes);
      
  
      for (const employee of this.employees) {
        if (!employee.upperManagerId) {
          continue;
        }
  
        const edge: Edge = {
          source: employee.upperManagerId,
          target: employee.id,
          label: '',
          data: {
            linkText: 'Manager of'
          }
        };
  
        this.links.push(edge);
      }
      console.log(" links ### ",this.links);
      
    }
  
    public getStyles(node: any): any {
      return {
        'background-color': node.data.backgroundColor
      };
    }


    public cricleCall(){
console.log(" Hi I am Boobalan ");

    }

  }


