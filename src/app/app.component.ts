import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Todo } from './models/todo';
import { P } from './models/todopriority.enum';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ToDoList';
  formToDo:Todo = {} as Todo;
  
  // Sample data
  allTasks:Todo[] = [
    { task: "Feel shame", completed: false, duration: 1, priority: P.High},
    { task: "Complete C# bootcamp assignment", completed: false, duration: 3, priority: P.High },
    { task: "Prepare for ShellHacks event", completed: false, duration: 2, priority: P.Normal },
    { task: "Attend Angular lecture", completed: true, duration: 1.5, priority: P.Normal},
    { task: "Update resume and LinkedIn", completed: false, duration: 2, priority: P.Low},
    { task: "Practice coding challenges", completed: true, duration: 1, priority: P.High},
    { task: "Buy groceries", completed: false, duration: 1, priority: P.Normal},
    { task: "Workout at the gym", completed: false, duration: 1.5, priority: P.Low},
    { task: "Meet with recruiter", completed: true, duration: 0.5, priority: P.High},
    { task: "Plan for group project", completed: false, duration: 1.5, priority: P.Low },
    { task: "Read up on Angular documentation", completed: false, duration: 2, priority: P.Normal }
  ];

  completeTask(t:Todo):void{
    t.completed = true;
  }
  removeTask(t:Todo):void{
    let index:number = this.allTasks.findIndex(x => x === t);
    this.allTasks.splice(index, 1);
  }
  addTask():void{
    this.formToDo.completed = false;
    let result: Todo = {...this.formToDo};
    this.allTasks.push(result);

    //clearing, sets to default value
    this.formToDo = {} as Todo;
  }
}