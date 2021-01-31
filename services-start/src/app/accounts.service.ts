import { Injectable, EventEmitter } from "@angular/core";

import { LoggingService } from "./logging.service";

//put @injectable to component you want to be injected at
@Injectable()
export class AccountsService {
  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];

  statusUpdated = new EventEmitter<string>();

  constructor(private loggingService: LoggingService) {

  }

  addAccount(name: string, status: string) {
    this.accounts.push({name: name, status: status});
    this.loggingService.logStatusChange(status)
  }

  updateStatus(id: number, status: string) {
    this.accounts[id].status = status;
  }
}