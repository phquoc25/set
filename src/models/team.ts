export class Team {
    private flag: string;
    private name: string;
    constructor(flag, name) {
        this.flag = flag;
        this.name = name;
    }

    getFlag() {
        return this.flag;
    }

    getName() {
        return this.name;
    }
}