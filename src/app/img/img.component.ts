import { Component, Input, OnChanges, SimpleChanges } from '@angular/core'

@Component({
  selector: 'eph-img',
  template: `
    <picture>
      <source [srcset]="webp" />
      <img [src]="src" [alt]="alt" class="{{ display }}" [style.height]="imgHeight" />
    </picture>
  `,
  styles: [
    `
      .fill {
        width: 100%;
      }
    `
  ]
})
export class ImgComponent implements OnChanges {
  @Input() src: string
  @Input() alt: string
  @Input() display = ''
  @Input() imgHeight = ''
  webp: string

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (this.src) this.webp = this.src.replace(/\.[a-z]+$/, '.webp')
  }
}
