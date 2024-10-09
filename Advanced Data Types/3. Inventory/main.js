var heroes = [];
function registerHero(input) {
    input.forEach(function (x) {
        var heroArgs = x.split(" / ");
        var hero = {
            hero: heroArgs[0],
            level: "=>" + heroArgs[1],
            items: "=>" + heroArgs[2].split(", ")
        };
        heroes.push(hero);
    });
}
function printHeroes() { heroes.forEach(function (x) { return console.log(x); }); }
;
registerHero([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]);
printHeroes();
