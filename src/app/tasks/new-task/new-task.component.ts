import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',

  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  private tasksService = inject(TasksService);
  @Output() close = new EventEmitter<void>();
  @Input({ required: true }) userId!: string;
  enteredTitle = "";
  enteredSummary = "";
  enteredDate = "";



  onClose() {
    this.close.emit();
  }

  onSubmit() {
    this.tasksService.addTask({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate,
    }, this.userId);
    this.close.emit();
  }

}
