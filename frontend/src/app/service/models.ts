export class Team {
    id!: Number;
    name!: String;
    capitan_name!: String;
}

export class TeamScore {
    id!: Number;
    name!: String;
    score!: Number;
}

export class AuthenticateResponse {
    statusCode!: Number;
    user!: User;
}

export class User {
    id!: Number;
    email!: String;
}

export class Athlete {
    id!: Number;
    name!: String;
}