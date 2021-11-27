import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  message!:string;
  title = 'RecBook';
  name='max';
  serverId:number=11;
  serverName:String="aws";
  allowNewServer= false;
  ServerNames='';
  compnyName='Udemy';
  public student ='Vinay Pathak'
  
  serverCreationStatus:string='server was not created;'
constructor(){
  setTimeout((()=>{
    this.allowNewServer=true;
  }),2000)
}
  getServer(){
    return this.serverId
  }
  OnCreateServer(){
    this.serverCreationStatus="server is created"
  }
  OnUpdateServerName(event:Event){
    this.ServerNames=(<HTMLInputElement>event.target).value
  }
  reciveMessage($event:any){
    this.message= $event
  }
}
