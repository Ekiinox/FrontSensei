export class User {

    id: Number;
    name: string;
    password: string;

    constructor(public ide: Number, public nom: string, public pass: string){
        this.id = ide;
        this.name = nom;
        this.password = pass;
    }

    setName(name: string){
        this.name = name;
    }
}
