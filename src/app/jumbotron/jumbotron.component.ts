import { Component, computed, input, Input } from '@angular/core';

@Component({
	selector: 'eph-jumbotron',
	template: `
		<div class="jumbotron {{ jumboClass() }}">
			<div class="container">
				<div class="row">
					<ng-content></ng-content>
				</div>
			</div>
		</div>
	`,
	styleUrls: ['jumbotron.component.scss']
})
export class JumbotronComponent {
	type = input.required<string>()
    jumboClass = computed(() => `jumbotron-${this.type()}`);
}
