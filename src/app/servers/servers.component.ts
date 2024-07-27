import { Component } from '@angular/core';

@Component({
  // selector: '[app-servers]';
  selector: 'app-servers',
  // template:`<app-server></app-server>`
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css'
})
export class ServersComponent {
allowNewserver = false;
serverCreation = 'no server was created!';
servername = 'Testserver';
createdserver = false;
server_array = ['Testserver', 'Testserver 2'];

constructor(){
  setTimeout(() => {
    this.allowNewserver = true;
  }, 2000);
}


onCreateServer()
{
  this.createdserver = true;
  this.serverCreation = 'Server was created! Name is' + this.servername;
  this.server_array.push(this.servername);
}

ngOnInit()
{

}

onUpdateServerName(event: Event)
{
  this.servername = (<HTMLInputElement>event.target).value
}

}
