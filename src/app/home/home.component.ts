import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
userName='neer';
serverCreated=false;
serverName='testServer';
servers=['testserver1','testserver2']
serverCreationStatus='server not created'
  constructor() { }

  ngOnInit(): void {
  }
  onResetUser(){
    this.userName='';
  }
  onCreateServer(){
    this.serverCreated=true;
    this.servers.push(this.serverName)
this.serverCreationStatus='server was created and the name is'+ this.serverName
  }
}
