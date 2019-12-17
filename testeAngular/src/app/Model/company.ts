export class Company {

    private name: string;
    private catchPrase: string;
    private bs: string;

    public constructor(name: string, catchPrase: string, bs: string, ) {

        this.name = name;
        this.catchPrase = catchPrase;
        this.bs = bs;
    }

    public getName(): string {
        return this.name;
    }
    public setName(name: string): void {
        this.name = name;
    }


    public getCatchPrase(): string {
        return this.catchPrase;
    }
    public setCatchPrase(catchPrase: string): void {
        this.catchPrase = catchPrase;
    }


    public getBs(): string {
        return this.bs;
    }
    public setBs(bs: string): void {
        this.bs = bs;
    }




}


