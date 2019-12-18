import { Geo } from './geo';

export class Address{
    private street: string;
    private suite: string;
    private city: string;
    private zipcode: string;
    private geo: Geo;


    public constructor(street: string, suite: string, city: string, zipcode: string, ){
        this.street = street;
        this.suite = suite;
        this.city = city;
        this.zipcode = zipcode;
    }

    
  
    public getStreet(): string{
        return this.street;
    }
    public setStreet(street:string): void{
        this.street = street;
    }

    public getSuite(): string{
        return this.suite;
    }
    public setSuite(suite:string): void{
        this.suite = suite;
    }

    public getCity(): string{
        return this.city;
    }
    public setCity(city:string): void{
        this.city = city;
    }

    public getZipcode(): string{
        return this.zipcode;
    }
    public setZipcode(zipcode:string): void{
        this.zipcode = zipcode;
    }

}