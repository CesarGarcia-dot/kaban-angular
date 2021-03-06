import { moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Injectable } from '@angular/core';
import { CommandManagerService } from '../command-manager/command-manager.service';
import { ReorderListCommand } from './commands/reorder-list.command';
import { TransferTaskData } from './common';

import {
  dummyBoard,
  KanbanBoard,
  KanbanList,
  KanbanTask,
  KanbanTaskFactory,
} from './model';

@Injectable()
export class KanbanStateService {
  public board: KanbanBoard = dummyBoard;

  constructor(private commandManager: CommandManagerService) {}

  updateListTitle(list: KanbanList, newTitle: string): void {
    list.title = newTitle;
  }

  moveList(fromIndex:number, toIndex:number): void{
    const command = new ReorderListCommand(this.board.lists, fromIndex, toIndex);
    this.commandManager.execute(command);
  }

  removeList(listToRemove: KanbanList): void {
    this.board.lists = this.board.lists.filter((list) => list !== listToRemove);
  }

  addTaskToList(list: KanbanList): void {
    list.tasks.push(KanbanTaskFactory.createDefault());
  }

  removeTaskFromList(list: KanbanList, taskIndex: number): void {
    list.tasks.splice(taskIndex, 1);
  }

  updateTask(task: KanbanTask, newDescription: string): void {
    task.description = newDescription;
  }

  reorderTask(list: KanbanList, fromIndex: number, toIndex:number):void {
    moveItemInArray(list.tasks,fromIndex,toIndex);
  }

  transferTask({
    fromList,
    toList,
    fromIndex,
    toIndex
  }: TransferTaskData):void{
    transferArrayItem(fromList.tasks, toList.tasks, fromIndex, toIndex);
  }


}
