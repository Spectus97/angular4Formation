import { IPerson } from '../shared/models/IPerson.models';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() user : any;
  @Output() onDelete: EventEmitter<void>;

  constructor() {
    this.onDelete = new EventEmitter<void>();
  }

  ngOnInit() {
  }

  delete(){
    this.onDelete.emit();
  }

}
