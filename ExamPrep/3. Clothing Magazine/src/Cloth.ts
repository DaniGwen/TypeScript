export class Cloth {

    public color: string;
    public size: number;
    public type: string;

    constructor(color: string, size: number, type: string) {
        this.color = color;
        this.size = size;
        this.type = type;
    }

    public toString():string {
        return `Product: ${this.type} with size ${this.size}, color ${this.color}`;
    }
}