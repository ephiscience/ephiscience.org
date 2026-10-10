import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class RouterActivateEventService {
	activated = new Subject<void>();
}
