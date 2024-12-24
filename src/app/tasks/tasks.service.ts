import {Task} from './task/task.model';
import {taskDataToAddTask} from './new-task/new-task.model';
import {Injectable} from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TasksService {
  private dummyTasks:Task[] = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
  ]

  constructor() {
    const tasks = localStorage.getItem('tasks');
    if (tasks) {
      this.dummyTasks = JSON.parse(tasks);
    }
  }
  getUserTasks(idOfUser:string){
    return this.dummyTasks.filter(task => task.userId === idOfUser )
  }

  removeTaskById(idOfTask:string){
    this.dummyTasks = this.dummyTasks.filter((task: Task) => task.id !== idOfTask)
    this.saveTasks()

  }

  addTaskToTask(newTask: taskDataToAddTask, userId:string){
    this.dummyTasks.push({
      dueDate: newTask.date,
      id: "t" + Math.floor(Math.random()*1000).toString(),
      summary: newTask.summary,
      title: newTask.title,
      userId: userId,
    })
    this.saveTasks()
  }

  private saveTasks(){
    localStorage.setItem('tasks', JSON.stringify(this.dummyTasks));
  }
}
