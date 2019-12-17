import { Address } from 'cluster';
import { Company }from './company';

export class User{

    private id: number;
    private nome: string;
    private username: string;
    private email: string;
    private address: Address;
    private phone: string;
    private website: string;
    private company: Company;


    public constructor(nome: string, username: string,  email: string,){
        this.nome = nome;
        this.username = username;
        this.email = email;
    }

    public getNome(): string{
        return this.nome;
    }
    public setNome(nome:string): void{
        this.nome = nome;
    }

    public getUsername(): string{
        return this.username;
    }
    public setUsername(username:string): void{
        this.username = username;
    }

    public getEmail(): string{
        return this.email;
    }
    public setEmail(email: string): void{
        this.email = email;
    }



  
}