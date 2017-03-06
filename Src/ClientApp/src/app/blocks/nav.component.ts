import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';

import { Account } from '../models';
import { AccountService } from '../account.service';

@Component({
    selector: 'ng2-nav',
    templateUrl: './nav.component.html'
})
export class NavComponent implements OnInit {

    account: Account;

    constructor(
        private accountService: AccountService) {

    }

    ngOnInit(): void {
        this.account = this.accountService.currAccount();
        console.debug(this.account);
    }
}
