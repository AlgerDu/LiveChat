export class ChatRecord {
    id: number;
    fromUserId: string;
    toUserId: string;
    sendTime: Date;
    text: string;
    isRead: boolean;
}

export class Account {
    chattingUsers: number[];
    joinGroups: number[];

    constructor(
        public id: number,
        public name: string) {
        this.chattingUsers = [];
        this.joinGroups = [];
    }
}

export class UserInfo {
    id: number;
    name: string;
    records: ChatRecord[];
    unreadCount: number;

    constructor() {

    }
}

export class Group {
    id: number;
    name: string;
    records: ChatRecord[];
    unreadCount: number;
}