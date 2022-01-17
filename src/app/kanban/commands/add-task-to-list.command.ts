import { Command } from "src/app/command-manager";
import { KanbanList, KanbanTaskFactory } from "../model";



export class AddTaskToListCommand implements Command{
  constructor(private list: KanbanList){}

  execute(): void {
      this.list.tasks.push(KanbanTaskFactory.createDefault());
  }
  undo(): void {
      this.list.tasks.pop();
  }
}
