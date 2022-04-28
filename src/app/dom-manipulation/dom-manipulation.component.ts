import { DomChildComponent } from './../dom-child/dom-child.component';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dom-manipulation',
  templateUrl: './dom-manipulation.component.html',
  styleUrls: ['./dom-manipulation.component.scss']
})
export class DomManipulationComponent {
  @ViewChild('child') child!: DomChildComponent
  backgroundColor: any= '#DFFF00'
  borderRadius: any 
  constructor() { }
  changeBRFromParent(br: any) {
    this.child.changeBR(br)
  }
  changeBgClrFromParent(bgClr: any) {
    this.child.changeBgClr(bgClr)
  }

}
