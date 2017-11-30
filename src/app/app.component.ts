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
  selectedClient: any;
  property: string;

  constructor(private clientService: ClientService) { }

  dynamicSort(property) {
    var sortOrder = 1;
    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (a,b) {
        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
    }
  }
  getClients(): void {
    this.clientService.getClients().then(clients => this.clients = clients.sort(this.dynamicSort("id")));
  }

  getClientsBy(property): void {
    this.clients.sort(this.dynamicSort(property))
    console.log(property)
  }

  ngOnInit(): void {
    this.getClients();
  }

  logIt(event): void {
    console.log(event)
  }

  onSubmit(clientId): void {
    this.selectedClient = {id: clientId}
    console.log(this);
  }

  onSelectClient(client: Client): void {
  	this.selectedClient = client;
    console.log(this);
  }

  onSelectSort(event): void {
    console.log(event);
  }
}
