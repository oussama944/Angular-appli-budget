import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
=======
import { BudgetItem } from 'src/shared/modules/budget-item.model';

>>>>>>> b73136b ("maj3")

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

<<<<<<< HEAD
=======
  budgetItems:BudgetItem[]=new Array<BudgetItem>();

>>>>>>> b73136b ("maj3")
  constructor() { }

  ngOnInit(): void {
  }
<<<<<<< HEAD

=======
  addItem(newItem:BudgetItem){
    this.budgetItems.push(newItem);
  }
  deleteItem(item:BudgetItem){
    let index=this.budgetItems.indexOf(item);
    this.budgetItems.splice(index,1);
  }
>>>>>>> b73136b ("maj3")
}
