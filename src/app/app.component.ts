import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 

export interface PeriodicElement {
  name: string;
}

export interface TestName {
  name: string;
  functionalArea: string;
  priority:string;
  storyId: string;
  totaltimeTaken: string;
  failurReason:string;
  defectId:string;
  comments:string;
  scenarioDesciption:string;
  exception:string;
  screenShot:string;
}
export interface FailureType {
  viewValue: string;
}
 const links: PeriodicElement[] = [
  {name: 'Hydrogen'},
  {name: 'Helium'},
  {name: 'eAdapter'},
  {name: 'Beryllium'},
  {name: 'Boron' },
  {name: 'Carbon'}
];
const testResults = [
  {name: 'SmartTest1',functionalArea: "P2p",priority: "High",storyId: "SDT-1012", totaltimeTaken:"28m",failurReason:"Automation Bug",defectId:"SDT-123",comments:"Default",
    scenarioDesciption:"Test is the first Scenario",exception:"This is first Exception",screenShot:"https://material.angular.io/assets/img/examples/shiba2.jpg"},
  {name: 'SmartTest2',functionalArea: "Sourcing",priority: "High",storyId: "SDT-1012", totaltimeTaken:"48m",failurReason:"Application Bug",defectId:"SDT-1234",comments:"Default2",
    scenarioDesciption:"Test is the Second Scenario",exception:"This is Second Exception",screenShot:"https://material.angular.io/assets/img/examples/shiba1.jpg"},
  {name: 'SmartTest3',functionalArea: "Supplier",priority: "High",storyId: "SDT-1012", totaltimeTaken:"38m",failurReason:"Automation Bug",defectId:"SDT-1235",comments:"Default3",
    scenarioDesciption:"Test is the Third Scenario",exception:"This is Third Exception",screenShot:"https://material.angular.io/assets/img/examples/shiba3.jpg"}
 ];
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit{
  testRes = testResults;
  item1;
  ngOnInit() {
    this.item1 = testResults[0];
  }
  doClick(testName)
  {
    console.log(testName);
    this.item1 = testResults.find(i => i.name === testName); 
    console.log(this.item1.functionalArea);
    }
  
  save(defect,comments,failurereason)
  {
   console.log(defect);
    console.log(comments);
    console.log(failurereason); 
  }
  
  failureTypes = [{viewValue:"Application Bug"},
  {viewValue:"Automation Bug"}]
}