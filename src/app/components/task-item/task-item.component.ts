import { Component, Input, OnInit, Output ,EventEmitter} from '@angular/core';
import {Task} from '../../Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent implements OnInit {

  faTimes = faTimes;

  @Input() task!:Task;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();

  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();
  constructor(){

  }
  ngOnInit(): void {
      
  }
  onDelete(task: Task){
    this.onDeleteTask.emit(task)
  }

  onToggle(task: Task){
    this.onToggleReminder.emit(task)
  }
  
}
