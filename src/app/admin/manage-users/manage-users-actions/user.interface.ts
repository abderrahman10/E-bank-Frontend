export interface UserDto{

    id?: string,
    firstname: string,
    lastname: string,
    email: string,
    password:string,
    active?: boolean,
    iban?:string
}