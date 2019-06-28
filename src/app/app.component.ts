import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', 
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  addTodo(){
    let inp = document.querySelector('input').value
    this.todo = {
      label : inp,
      done : true
    }
    this.todos.push(this.todo)
  }
  todo : any
  title = 'Todo';
  todos  = [
  {
    label    : 'To Drink Milk',
    done     : true
  },
  {
    label    : 'Clean House',
    done     : true
  }
]
  
}
 