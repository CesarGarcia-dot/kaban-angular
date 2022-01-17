import { transferArrayItem } from "@angular/cdk/drag-drop";
import { Command } from "src/app/command-manager";
import { TransferTaskData } from "../common";

export class TransferTaskCommand implements Command{
  constructor(private transferTaskData: TransferTaskData){}
  execute(): void {
    const { fromList, toList, fromIndex, toIndex } = this.transferTaskData;
    transferArrayItem(fromList.tasks, toList.tasks, toIndex, fromIndex);
  }
  undo(): void {
    const { fromList, toList, fromIndex, toIndex } = this.transferTaskData;
    transferArrayItem(toList.tasks, fromList.tasks, toIndex, fromIndex);
  }
}
