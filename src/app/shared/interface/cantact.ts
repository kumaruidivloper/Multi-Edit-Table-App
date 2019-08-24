export interface Contact {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    work: string;
    street: string;
    city: string;
    state: string;
    zip: string;
}

export interface Schema {
    name: string;
    head: string;
    fixed: boolean
}
