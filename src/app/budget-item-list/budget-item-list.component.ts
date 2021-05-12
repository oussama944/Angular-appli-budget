<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
=======
import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BudgetItem } from 'src/shared/modules/budget-item.model';
import { EditItemModalComponent } from '../edit-item-modal/edit-item-modal.component';
>>>>>>> b73136b ("maj3")

@Component({
  selector: 'app-budget-item-list',
  templateUrl: './budget-item-list.component.html',
  styleUrls: ['./budget-item-list.component.scss']
})
export class BudgetItemListComponent implements OnInit {

<<<<<<< HEAD
  constructor() { }
=======
  @Input()budgetItems:BudgetItem[];
  @Output() delete:EventEmitter<any>= new EventEmitter;
  constructor(public dialog:MatDialog) { }
>>>>>>> b73136b ("maj3")

  ngOnInit(): void {
  }

<<<<<<< HEAD
=======
  onDeleteButtonClicked(item:BudgetItem){
    this.delete.emit(item);
  }
  onCardClicked (item:BudgetItem){
    const DialogRef=this.dialog.open(EditItemModalComponent,{
      width:'580px',
      data:item
    });

    DialogRef.afterClosed().subscribe(result=>{
      // if no result value
      if(result){
        //replace the item updates
        this.budgetItems[this.budgetItems.indexOf(item)]=result;
      }
    })
   }

>>>>>>> b73136b ("maj3")
}
