import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Task {
name: string;
completed: boolean;
}

@Component({
selector: 'app-root',
imports: [CommonModule, FormsModule],
templateUrl: './app.html',
styleUrl: './app.css'
})
export class App {

newTask: string = '';

tasks: Task[] = [
{
name: 'Complete Angular assignment',
completed: true
},
{
name: 'Learn Angular routing',
completed: false
},
{
name: 'Build Student Dashboard',
completed: false
}
];

get completedTasks(): number {
return this.tasks.filter(task => task.completed).length;
}

get pendingTasks(): number {
return this.tasks.filter(task => !task.completed).length;
}

get progress(): number {
if (this.tasks.length === 0) {
return 0;
}


return Math.round(
  (this.completedTasks / this.tasks.length) * 100
);

}

addTask(): void {
const taskName = this.newTask.trim();


if (taskName === '') {
  return;
}

this.tasks.push({
  name: taskName,
  completed: false
});

this.newTask = '';


}

toggleTask(index: number): void {
this.tasks[index].completed =
!this.tasks[index].completed;
}
}
