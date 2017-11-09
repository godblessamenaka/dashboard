import { OnInit, Component, OnChanges } from '@angular/core';
import { Client } from './client';
import { ClientService } from './client.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ ClientService ]
})

export class AppComponent implements OnInit {
  title = 'Client Dashboard';
  clients: Client[];
  selectedClient: Client;

  constructor(private clientService: ClientService) { }

  getClients(): void {
    this.clientService.getClients().then(clients => this.clients = clients);
  }

  ngOnInit(): void {
    this.getClients();
  }


  onSelect(client: Client): void {
  	this.selectedClient = client;
    console.log(this);
  }
}
