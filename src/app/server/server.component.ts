import { Component} from '@angular/core';
@Component(
    {
        selector : 'app-server',
        templateUrl : './server.component.html',
        styles: [`
        .online{
            color:white;
        }
        `]
    }
)
export class ServerComponent {
    serverId:number = 10;
    serverStatus:string = "offline";
    returnstring: string = "It works!";
    color = '';

    constructor()
    {
        this.serverStatus = Math.random() > 0.5? 'online':'offline'
    }

    getstatus()
    {
        return this.returnstring;
    }

    getColor()
    {
        this.color = this.serverStatus === 'online'? 'green':'red'
        return this.color
    }


}