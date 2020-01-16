import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'eph-button',
  template: `
    <div style="display:block; text-align:center; padding-bottom:20px;">
      <a
        [href]="href"
        [target]="target"
        [rel]="rel"
        class="btn btn-lg btn-primary text-white font-weight-bold px-4 py-3"
        style="border-radius: 5px"
        translate
      >
        <ng-content></ng-content>
      </a>
    </div>
  `,
  styles: []
})
export class ButtonComponent implements OnInit {
  @Input() href
  @Input() target
  @Input() rel

  ngOnInit() {}
}
