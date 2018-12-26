import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'eph-card',
  template: `
    <div class="col-sm-{{ size }}">
      <div class="card card-{{ color }}">
        <ng-content select="card-title"></ng-content>
        <br />
        <ng-content select="card-content"></ng-content>
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styleUrls: ['card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() color = 'blue'
  @Input() size = 6

  constructor() {}

  ngOnInit() {}
}
