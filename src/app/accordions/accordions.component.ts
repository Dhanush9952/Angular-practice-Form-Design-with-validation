import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordions',
  templateUrl: './accordions.component.html',
  styleUrls: ['./accordions.component.css']
})
export class AccordionsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
  expandedIndex = 0;
}
