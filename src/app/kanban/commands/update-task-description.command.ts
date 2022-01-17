import { Command } from "src/app/command-manager";
import { KanbanTask } from "../model";

export class UpdateTaskDescriptionCommand implements Command{
  private previousLabel: string;
  constructor(private task: KanbanTask, private newDescription:string){
    this.previousLabel = task.description;
  }
  execute(): void {
    this.task.description = this.newDescription;
  }
  undo(): void {
    this.task.description = this.previousLabel;
  }
}
