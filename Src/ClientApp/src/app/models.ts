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
        id: number,
        name: string) {
        this.chattingUsers = new UserInfo[0];
        this.joinGroups = new Group[0];
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