type Hero = {
    hero: string,
    level: string,
    items: string
}

const heroes: Array<Hero> = [];

function registerHero(input: Array<string>) {
    input.forEach(x => {
        let heroArgs = x.split(" / ");

        let hero: Hero = {
            hero: heroArgs[0],
            level: "=> " + heroArgs[1],
            items: "=> " + heroArgs[2].split(", ")
        }

        heroes.push(hero);
    })
}

function printHeroes(): void { heroes.forEach(x => console.log(x)) };

registerHero([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]);
printHeroes();