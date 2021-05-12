<<<<<<< HEAD
import { Component, Input, OnInit } from '@angular/core';
=======
import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { BudgetItem } from 'src/shared/modules/budget-item.model';
>>>>>>> b73136b ("maj3")

@Component({
  selector: 'app-budget-item-card',
  templateUrl: './budget-item-card.component.html',
  styleUrls: ['./budget-item-card.component.scss']
})
export class BudgetItemCardComponent implements OnInit {

<<<<<<< HEAD
  @Input() isIncome:boolean=true;
=======
  @Input() item:BudgetItem;
  @Output()xButtonClick:EventEmitter<any>=new EventEmitter<any>();
  @Output() cardClick:EventEmitter<any>=new EventEmitter<any>();
>>>>>>> b73136b ("maj3")
  constructor() { }

  ngOnInit(): void {
  }

<<<<<<< HEAD
=======
  onXButtonClick(){
    // evenement
    this.xButtonClick.emit();
  }

  onCardClick(){
    this.cardClick.emit();
    }

>>>>>>> b73136b ("maj3")
}
