import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-childrens',
  templateUrl: './childrens.component.html',
  styleUrls: ['./childrens.component.css']
})
export class ChildrensComponent implements OnInit {
cMessage:string='where is my Dinner please let me know.....'
  constructor() { }

  ngOnInit(): void {
  }

@Input() public studentDetail
@Output() messageEvent=new EventEmitter()
sendMessage(){
  this.messageEvent.emit(this.cMessage)
}
}
