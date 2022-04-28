import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-dom-child',
  templateUrl: './dom-child.component.html',
  styleUrls: ['./dom-child.component.scss']
})
export class DomChildComponent {
  @ViewChild('childDomDiv') targetDiv!: ElementRef
  borderRadius: any
  backgroundColor: any = '#FA8072'
  constructor() { }
  changeBR(br: any) { this.targetDiv.nativeElement.style.borderRadius = br + 'px' }
  changeBgClr(bgClr: any) { this.targetDiv.nativeElement.style.backgroundColor = bgClr }

}
