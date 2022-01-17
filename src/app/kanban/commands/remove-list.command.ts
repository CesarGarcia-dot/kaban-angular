import { Command } from "src/app/command-manager";
import { KanbanBoard, KanbanList } from "../model";

export class RemoveListCommand implements Command {
  private listIndex: number;
  constructor(private board: KanbanBoard, private listToRemove: KanbanList) {
    this.listIndex = board.lists.findIndex((list) => list === listToRemove);
  }
  execute(): void {
    this.board.lists.splice(this.listIndex, 1);
  }
  undo(): void {
    this.board.lists.splice(this.listIndex, 0, this.listToRemove);
  }

}
