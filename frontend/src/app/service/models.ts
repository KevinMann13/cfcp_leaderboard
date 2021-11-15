export class Team {
    id!: Number;
    name!: string;
    capitan_name!: string;
}

export class TeamScore {
    id!: Number;
    name!: string;
    score!: Number;
}

export class AuthenticateResponse {
    statusCode!: Number;
    user!: User;
}

export class User {
    id!: Number;
    email!: string;
    password!: string;
    token!: string;
    athlete!: Athlete;
}

export class Athlete {
    id!: Number;
    name!: string;
    team!: Team
}