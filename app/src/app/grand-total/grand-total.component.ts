import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-grand-total',
  templateUrl: './grand-total.component.html',
  styleUrls: ['./grand-total.component.scss']
})
export class GrandTotalComponent implements OnInit {

  @Input() investmentTotal : number;
  @Input() grandTotal : number;

  constructor() { }

  ngOnInit(): void {
  }

}
