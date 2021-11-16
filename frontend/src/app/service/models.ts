
export class Team {
    id!: number;
    name!: string;
    capitan_name!: string;
}

export class TeamScore {
    id!: number;
    name!: string;
    score!: number;
}

export class AuthenticateResponse {
    statusCode!: number;
    user!: User;
}

export class User {
    id!: number;
    email!: string;
    password!: string;
    token!: string;
    athlete!: Athlete;
}

export class Athlete {
    id!: number;
    name!: string;
    team!: Team;
    attendance!: Attendance[];
    rowing!: Row[];
}

export class Attendance {
    id!: number;
    date!: Date;
}

export class Row {
    id!: number;
    date!: Date;
    meters!: number;
}

export class RowingScore {
    id!: number;
    name!: string;
    team_name!: string;
    total_meters!: number;
}