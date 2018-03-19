import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emit-parent',
  templateUrl: './emit-parent.component.html',
  styleUrls: ['./emit-parent.component.css']
})
export class EmitParentComponent implements OnInit {

  myObj = [];

  constructor() {
    this.myObj = [
      {titles: "My Title 1"},
      {titles: "My Title 2"},
      {titles: "My Title 3"},
      {titles: "My Title 4"},
      {titles: "My Title 5"},
      {titles: "My Title 6"},
      {titles: "My Title 7"},
      {titles: "My Title 8"}
    ];
  }

  ngOnInit() {
  }

  myDelete(indx) {
    this.myObj.splice(indx, 1);
  }

}
