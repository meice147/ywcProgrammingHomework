import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-position-box',
  templateUrl: './position-box.component.html',
  styleUrls: ['./position-box.component.scss']
})
export class PositionBoxComponent implements OnInit {
  @Input() // <-----
  title: string;
  @Input() // <-----
  imgUrl: string;


  constructor() { }

  ngOnInit() {
  }

}
