import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
  @Input() fullIcon: string;
  @Input() emptyIcon: string;
  @Input() grade: number;
  emptyArray;
  fullArray;

  constructor() { }

  ngOnInit(): void {
    this.fullArray = new Array(this.grade);
    this.emptyArray = new Array(5 - this.grade)
  }

}
