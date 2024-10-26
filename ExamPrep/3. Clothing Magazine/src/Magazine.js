"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Magazine = void 0;
class Magazine {
    constructor(type, capacity) {
        this.cloths = [];
        this.capacity = capacity;
        this.type = type;
    }
    /* adds an entity to the collection if there is room for it*/
    addCloth(cloth) {
        if (this.cloths.length >= this.capacity) {
            return;
        }
        this.cloths.push(cloth);
    }
    /*� removes a cloth by given color, if such exists, and returns boolean(true if it is removed, otherwise � false)*/
    removeCloth(color) {
        let existingCloth = this.cloths.find(x => x.color === color);
        if (existingCloth) {
            this.cloths.splice(this.cloths.indexOf(existingCloth), 1);
            return true;
        }
        return false;
    }
    /*� returns the Cloth with the smallest Size*/
    getSmallestCloth() {
        let sorted = this.cloths.sort((a, b) => a.size - b.size);
        return sorted[0];
    }
    /*returns the Cloth with the given color*/
    getCloth(color) {
        var _a;
        return (_a = this.cloths.find(x => x.color === color)) !== null && _a !== void 0 ? _a : {};
    }
    /*returns the number of clothes*/
    getClothCount() {
        return this.cloths.length;
    }
    report() {
        const sorted = this.cloths.sort((a, b) => a.size - b.size);
        return `${this.type} magazine contains:\n` + sorted.map(x => `${x.toString()}`).join("\n");
    }
}
exports.Magazine = Magazine;
//# sourceMappingURL=Magazine.js.map