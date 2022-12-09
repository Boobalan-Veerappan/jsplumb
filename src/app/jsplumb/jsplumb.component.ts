import { Component, OnInit, ViewChild,ElementRef } from '@angular/core';
import { newInstance } from '@jsplumb/browser-ui';
import { BezierConnector } from '@jsplumb/connector-bezier';
import { BlankEndpoint, DotEndpoint,StraightConnector  } from '@jsplumb/core';
import { AnchorLocations, ConnectorSpec, EndpointSpec, EndpointStyle, PaintStyle } from '@jsplumb/common';
import { FlowchartConnector } from '@jsplumb/connector-flowchart';

@Component({
  selector: 'app-jsplumb',
  templateUrl: './jsplumb.component.html',
  styleUrls: ['./jsplumb.component.css']
})

// export class connectorDir implements EndpointStyle{
  
// }

export class JsplumbComponent implements OnInit {

  @ViewChild('container') container!: ElementRef<HTMLElement>;

  @ViewChild('technicalMapping') technicalMapping! : ElementRef<HTMLElement>

  const1:PaintStyle={};
  public relationData = [{
    categoryName: "Plan",
    technicalCategory: [{
      technology: "Rally",
      technologyUses: [{
        id: "1",
        name: "BackLog Item"
      }, {
        id: "2",
        name: "Defect"
      }]
    }, {
      technology: "Invision",
      technologyUses: [{
        id: "3",
        name: "Screen"
      }, {
        id: "4",
        name: "Document"
      }]

    }, {
      technology: "UXPin",
      technologyUses: [{
        id: "5",
        name: "Screen"
      }]

    }, {
      technology: "GitHub",
      technologyUses: [{
        id: "6",
        name: "ChangeSet"
      }]

    }
    ]
  }, {
    categoryName: "Code",
    technicalCategory: [{
      technology: "Android",
      technologyUses: [{
        id: "7",
        name: "Package"
      }]
    }]
  }]
  public tracability = [
    {
                "id": 1,
                "fromTechnology": 1,
                "toTechnology": 3,
                "fromArtifact": "BacklogItem",
                "description":"Description",
                "toArtifact": "ChangeSet",
                "relationship": "complete",
                "status": null,
                "notes": null,
                "updatedBy": "VSAKTHIP",
                "updated": "2022-11-18T11:48:15.313394+05:30"
    },{
      "id": 2,
      "fromTechnology": 1,
      "toTechnology": 2,
      "description":"Description",
      "fromArtifact": "BacklogItem",
      "toArtifact": "ChangeSet",
      "relationship": "pending",
      "status": null,
      "notes": null,
      "updatedBy": "VSAKTHIP",
      "updated": "2022-11-18T11:48:15.313394+05:30"
},
{
      "id": 3,
      "fromTechnology": 2,
      "toTechnology": 5,
      "description":"Description",
      "fromArtifact": "BacklogItem",
      "toArtifact": "Screen",
      "relationship": "complete",
      "status": null,
      "notes": null,
      "updatedBy": "VSAKTHIP",
      "updated": "2022-11-18T11:48:15.313394+05:30"


    },
    {
      "id": 4,
      "fromTechnology": 2,
      "toTechnology": 4,
      "description":"Description",
      "fromArtifact": "Screen",
      "toArtifact": "Document",
      "relationship": "pending",
      "status": null,
      "notes": null,
      "updatedBy": "VSAKTHIP",
      "updated": "2022-11-18T11:48:15.313394+05:30"
    }]



  // endpoint:EndpointSpec={};


  async ngAfterViewInit(): Promise<void> {
    const container = this.container.nativeElement;

    const techinalMap = this.technicalMapping.nativeElement;

    // init jsplumb
    const configs: any = {
      // dragOptions: { cursor: 'pointer', zIndex: 2000 },
      // paintStyle: { stroke: '#666' },
      // endpointHoverStyle: { fill: "orange" },
      // hoverPaintStyle: { stroke: "orange" },
      // endpointStyle: { width: 20, height: 16, stroke: '#666' },
      // endpoint: 'Rectangle',
      // anchors: ["Top", "Bottom"],
      // anchors:['Right', 'Left'],
      // anchors: ['Left', 'Continuous'],
      anchor: AnchorLocations.Right,
      anchors: [ AnchorLocations.Right],
      container: container,
      // dropOptions:{activeClass:"dragActive", hoverClass:"dropHover"},
      // connector: {
      //   type:
      // }
    };

    const techinalConfig :any = {
      anchor:AnchorLocations.AutoDefault,
      anchors:[AnchorLocations.Top,AnchorLocations.Bottom,AnchorLocations.Right,AnchorLocations.Left],
      container: techinalMap,
    }


    var instance: any = newInstance(configs);

    var instance1: any = newInstance(techinalConfig);

    const sourceElement: any = document.querySelector(`#test-1`),
      sourceEndpointConfigs: any = {
        endpoint: {
          type: DotEndpoint.type,
          options: {
            radius: 5,
          },
          connectorOverlays:[ { type:"Arrow", options:{location:1 }}],
          // connectorOverlays:[
          //   // { type:"Arrow", options:{ width:10, length:20, location:1, id:"arrow" } },
          //   // { type:"Label", options:{ label:"foo", id:"label" } }
          // ],
          anchor: AnchorLocations.Right,
          anchors: [ AnchorLocations.Right],
          // anchor:{ type:"Continuous", options:{ faces:[ "top", "left" ] } }
          // anchors:["Right", "Left" ],
        },
      };


      const sourceTechinalElement:any = document.querySelector(`#techincal-1`)
      const techincalSourceEndPointConfig:any={ 
        endpoint: {
          type:BlankEndpoint.type,
        options: {
          radius: 5,
        },
        connectorOverlays:[ { type:"Arrow", options:{location:1 }}],
        anchor:AnchorLocations.Bottom,
        anchors:[ AnchorLocations.Top,AnchorLocations.Bottom,AnchorLocations.Left,AnchorLocations.Right],
    
      }};

      const targetTechincalElement:any = document.querySelector(`#techincal-3`)
     const techincalTargetEndPointConfig:any = techincalSourceEndPointConfig;
    const targetElement: any = document.querySelector(`#test-2`),
      targetEndpointConfigs: any = sourceEndpointConfigs;

    const connectionConfigs = {
      source: instance.addEndpoint(sourceElement, sourceEndpointConfigs),
      target: instance.addEndpoint(targetElement, targetEndpointConfigs),
      connector: {
        type:"Straight",
        options:{
          stub:40,
          gap :0,
          cssClass:"color-red"
        }
    
      },
     endpoint:{
      type:DotEndpoint.type,
      options:{cssClass :"color-red"}
     },
      anchor: AnchorLocations.AutoDefault,
      paintStyle:{ stroke:"blue", strokeWidth:2,dashstyle:"2 2" },
      overlays: [
        { type:"Arrow", options:{location:1}},
        {
          type:"Custom",
          options: {
          create:(component:any)=>{
            const d = document.createElement("div")
            d.innerHTML = "<i class='fas fa-info-circle'></i>"
            return d
          },
          location:0.7,
          id:"customOverlay"
          },
        },
      ],
    };

    const targetTechincalElement4:any = document.querySelector(`#techincal-4`)

    const targetTechnicalConfig = techincalSourceEndPointConfig;

    const connectionConfigs4 = {
      source: instance1.addEndpoint(targetTechincalElement, techincalTargetEndPointConfig),
      target: instance1.addEndpoint(targetTechincalElement4,techincalSourceEndPointConfig),
      connector:{ type:  FlowchartConnector.type,
        options: {
          cornerRadius: 10,
        }},
     endpoint:{
      type:DotEndpoint.type,
      options:{cssClass :"color-red",
       stub: [10, 50], midpoint: 0.0001 }
     },
     anchors: AnchorLocations.AutoDefault,
     //  anchors: [ AnchorLocations.Top,AnchorLocations.Left,AnchorLocations.Right],
      paintStyle:{ stroke:"blue", strokeWidth:2,dashstyle:"2 2" },
      overlays: [
        { type:"Arrow", options:{location:1}},
        {
          type:"Custom",
          options: {
          create:(component:any)=>{
            const d = document.createElement("div")
            d.innerHTML = "<i class='fas fa-info-circle'></i>"
            return d
          },
          location:0.7,
          id:"customOverlay"
          },
        },
      ],
    }

    const targetTechincalElement5:any = document.querySelector(`#techincal-5`)
    const connectionConfigs5 = {
      source: instance1.addEndpoint(sourceTechinalElement, techincalTargetEndPointConfig),
      target: instance1.addEndpoint(targetTechincalElement5,techincalSourceEndPointConfig),
      connector:{ type:  FlowchartConnector.type,
        options: {
          cornerRadius: 10,
          alwaysRespectStubs :true,
          midpoint:0.75
        }},
     endpoint:{
      type:DotEndpoint.type,
      options:{cssClass :"color-red"}
     },
     
// anchor:[ [ 0.2, 0, 0, -1 ],  [ 1, 0.2, 1, 0 ], [ 0.8, 1, 0, 1 ], [ 0, 0.8, -1, 0 ] ],
     //  anchors: [ AnchorLocations.Top,AnchorLocations.Left,AnchorLocations.Right],
     anchor:[ 0.5, 1, 0, 1, 0, 50 ] ,
      paintStyle:{ stroke:"blue", strokeWidth:2,dashstyle:"2 2" },
      overlays: [
        { type:"Arrow", options:{location:1}},
        {
          type:"Custom",
          options: {
          create:(component:any)=>{
            const d = document.createElement("div")
            d.innerHTML = "<i class='fas fa-info-circle'></i>"
            return d
          },
          location:0.7,
          id:"customOverlay"
          },
        },
      ],

    }

    const techincalconnectConfig = {
      source: instance1.addEndpoint(sourceTechinalElement, techincalSourceEndPointConfig),
      target: instance1.addEndpoint(targetTechincalElement, techincalTargetEndPointConfig),
      connector:{ type:  FlowchartConnector.type,
        options: {
          cornerRadius: 10,
        }},
     endpoint:{
      type:DotEndpoint.type,
      options:{cssClass :"color-red"}
     },
     anchors: AnchorLocations.AutoDefault,
    //  anchors: [ AnchorLocations.Top,AnchorLocations.Left,AnchorLocations.Right],
     paintStyle:{ stroke:"blue", strokeWidth:2,dashstyle:"2 2" },
     overlays: [
       { type:"Arrow", options:{location:1}},
       {
         type:"Custom",
         options: {
         create:(component:any)=>{
           const d = document.createElement("div")
           d.innerHTML = "<i class='fas fa-info-circle'></i>"
           return d
         },
         location:0.7,
         id:"customOverlay"
         },
       },
     ],
    }

    const targetElement1 = document.querySelector("#test-3") 
const connectConfig1={
  source:instance.addEndpoint(targetElement1, targetEndpointConfigs),
  target:instance.addEndpoint(sourceElement,targetEndpointConfigs),
  connector: {
    type:"Straight",
    options:{
      stub:50,
      gap :0
    }

  },
  anchor: AnchorLocations.Right,
  anchors: [ AnchorLocations.Right],
  overlays: [
    // { type:"Arrow", options:{location:1}},
    {
      type: 'Label',
      options: {
        label: 'testa',
        location: 0.25,
        id: 'myLabel',
      },
    },
  ],
};

    instance.connect(connectionConfigs);
    instance.connect(connectConfig1);
    // instance1.connect(techincalconnectConfig);
    // instance1.connect(connectionConfigs4);
    // instance1.connect(connectionConfigs5);

    this.tracability.forEach(data=>{

      const fromTechincalElement:any = document.querySelector(`#techincal-${data.fromTechnology}`)

      const toTechincalElement:any = document.querySelector(`#techincal-${data.toTechnology}`)

      const techincalconnectConfig = {
        source: instance1.addEndpoint(fromTechincalElement, techincalSourceEndPointConfig),
        target: instance1.addEndpoint(toTechincalElement, techincalTargetEndPointConfig),
        connector:{ type:  FlowchartConnector.type,
          options: {
            cornerRadius: 10,
            stub:5
          }},
       endpoint:{
        // type:BlankEndpoint.type,
        options:{cssClass :"color-red"}
       },
       anchor:AnchorLocations.Bottom,
       anchors:[ AnchorLocations.Top,AnchorLocations.Bottom,AnchorLocations.Left,AnchorLocations.Right],
        // anchors: [ AnchorLocations.Top,AnchorLocations.Left,AnchorLocations.Right],
       paintStyle:{ stroke:"#000", strokeWidth:2,dashstyle:data.relationship =="complete" ?"none":"2 2"  },
      
       overlays: [
         { type:"Arrow", options:{location:1,width:10, length:7}},
         {
           type:"Custom",
           options: {
           create:(component:any)=>{
             const d = document.createElement("div")
             d.addEventListener('click',()=>{
              console.log(" $$$ ### ");

              alert(data.description);
              
             })
             d.innerHTML = "<i class='fas fa-info-circle ' style='cursor: pointer' (click)='displayData()'></i>"
             return d
           },
           location:0.5,
           id:"customOverlay"
           },
         },
       ],
      }
      instance1.connect(techincalconnectConfig);
    });
  }


  ngOnInit(): void {
    
  }

  displayData(){
    console.log(" $$$ ");
    
  }

}
