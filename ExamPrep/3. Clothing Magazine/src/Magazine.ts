import { Cloth } from "./Cloth";

export class Magazine {

    public cloths: Array<Cloth> = [];
    public capacity: number;
    public type: string;

    constructor(type: string, capacity: number ) {
        this.capacity = capacity;
        this.type = type;
    }

    /* adds an entity to the collection if there is room for it*/
    public addCloth(cloth: Cloth): void {
        if (this.cloths.length >= this.capacity) {
            return;
        }

        this.cloths.push(cloth);
    }

    /*– removes a cloth by given color, if such exists, and returns boolean(true if it is removed, otherwise – false)*/
    public removeCloth(color: string): boolean {
        let existingCloth = this.cloths.find(x => x.color === color);
        if (existingCloth) {
            this.cloths.splice(this.cloths.indexOf(existingCloth), 1)
            return true;
        }
        return false;
    }

    /*– returns the Cloth with the smallest Size*/
    public getSmallestCloth(): Cloth {
        let sorted = this.cloths.sort((a, b) => a.size - b.size);

        return sorted[0];
    }

    /*returns the Cloth with the given color*/
    public getCloth(color: string): Cloth {
        return this.cloths.find(x => x.color === color) ?? {} as Cloth;
    }

    /*returns the number of clothes*/
    public getClothCount(): number {
        return this.cloths.length;
    }

    public report(): string {
        const sorted = this.cloths.sort((a, b) => a.size - b.size);
        return `${this.type} magazine contains:\n` + sorted.map(x => `${x.toString()}`).join("\n");
    }
}