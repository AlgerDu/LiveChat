import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Account } from './models';

@Injectable()
export class AccountService {

    constructor() { }

    currAccount(): Account {
        return new Account(1, '张三');
    }
}