import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-emit-child',
  templateUrl: './emit-child.component.html',
  styleUrls: ['./emit-child.component.css']
})
export class EmitChildComponent implements OnInit {
  
  @Input() sendObj:any;
  indx:any;
  @Output() sendMethod: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  receveMethod() {
    this.sendMethod.emit(this.indx);
  }

}
