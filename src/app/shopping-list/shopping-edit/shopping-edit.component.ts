import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { Ingredient } from "src/app/shared/ingredient.model";

@Component({
  selector: "app-shopping-edit",
  templateUrl: "./shopping-edit.component.html",
  styleUrls: ["./shopping-edit.component.css"],
})
export class ShoppingEditComponent implements OnInit {
  nameInput: string;
  amountInput: string;

  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  constructor() {}

  ngOnInit() {}

  onAddItem(name, amount) {
    console.log(name.value);
    const newIngredient = new Ingredient(name.value, amount.value);
    this.ingredientAdded.emit(newIngredient);
  }
}
