import { Injectable } from '@angular/core';

import { Client } from './client';
import { CLIENTS } from './mock-clients';

@Injectable()
export class ClientService {
	getClients(): Promise<Client[]> {
		return Promise.resolve(CLIENTS);
	}
}