import {Component,EventEmitter,Output} from 'angular2/core';

import {RuleData} from "./data";
@Component({
  // Declare the tag name in index.html to where the component attaches
  selector: 'dynamic-numof-elements',
  
  // Location of the template for this component
  templateUrl: 'src/dynamicnumof.elements.html'
})
export class DynamicElements {
  counter=1;
  data=[];
   submitted = false;
    data: string;
  constructor()
  {
    this.data.push(new RuleData(null));
  }
  addElement()
  {
     this.data.push(new RuleData(null));
  }
  
  removeElement()
  {
    this.data.pop();
  }
  
   onSubmit(data) {
        this.submitted = true;
       // this.data = JSON.stringify(data);
        console.log(this.data);
        
    }
}

