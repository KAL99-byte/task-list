import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Task } from '../../Task';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css',
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();

  text!: string;
  day!: string;
  reminder: boolean = false;
  subscription!: Subscription;
  showAddTask!: boolean;

 constructor(private uiService: UiService) {

   this.subscription = this.uiService.onToggle().subscribe((value) => this.showAddTask = value);
   
  }

  ngOnInit(): void {}

  onSubmit() {
    if (!this.text) {
      alert('please add a task');
      return;
    }

    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder,
    };

    this.onAddTask.emit(newTask);

    this.text = '';
    this.day = '';
    this.reminder = false;
  }
}
