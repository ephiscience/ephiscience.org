import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
	selector: 'eph-contact-form',
	template: `
		<form name="contact_form" class="form-horizontal">
			<div class="mb-3">
				<label class="col-sm-2 control-label" for="contact-name">Nom</label>
				<div class="col-sm-10">
					<input class="form-control" type="text" name="contact-name" value="" placeholder="inscris ton nom." />
				</div>
			</div>
			<div>
				<label class="col-sm-2 control-label" for="contact-address">Courriel (requis)</label>
				<div class="col-sm-10">
					<input
						class="form-control"
						type="email"
						name="contact-address"
						value=""
						placeholder="inscris ton adresse courriel."
						required
					/>
				</div>
			</div>
			<div class="mb-3">
				<label class="col-sm-2 control-label" for="contact-text-area">Message</label>
				<div class="col-sm-10">
					<textarea class="form-control" name="contact-text-area" rows="8" cols="40" placeholder="écris ton message."></textarea>
				</div>
			</div>
			<button class="btn btn-success center-block">Envoyer</button>
		</form>
	`,
	changeDetection: ChangeDetectionStrategy.Eager,
	styles: []
})
export class ContactFormComponent {}
