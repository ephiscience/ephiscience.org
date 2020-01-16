import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'eph-eph-country-flag',
  styleUrls: ['./eph-country-flag.component.scss'],
  template: `
    <span class="flag-icon" [classList]="flagClass()"></span>
  `
})
export class EphCountryFlagComponent implements OnInit {
  @Input() country: String
  constructor() {}

  ngOnInit() {}

  flagClass() {}
}
