import { Component, computed, input, Input, OnChanges, ChangeDetectionStrategy } from '@angular/core';

@Component({
	selector: 'eph-img',
	template: `
		<picture>
			<source [srcset]="webp()" type="image/webp" />
			<img [src]="src()" [alt]="alt()" class="{{ display() }}" [style.height]="imgHeight()" />
		</picture>
	`,
	changeDetection: ChangeDetectionStrategy.Eager,
	styles: [
		`
			.fill {
				width: 100%;
			}
		`
	]
})
export class ImgComponent {
    src = input.required<string>()
    alt = input<string>("")
    display = input('')
    imgHeight = input('')
    webp = computed(() => this.src().replace(/\.[a-z]+$/, '.webp'));
}
