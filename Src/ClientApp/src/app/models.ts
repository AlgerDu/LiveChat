export class ChatRecord {
    id: number;
    fromUserId: string;
    toUserId: string;
    sendTime: Date;
    text: string;
    isRead: boolean;
}

export class Account {
    id: number;
    name: string;
    chattingUsers: number[];
    joinGroups: number[];
}

export class UserInfo {
    id: number;
    name: string;
}

export class Group {
    id: number;
    name: string;
}