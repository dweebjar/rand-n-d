var pcName, pcClass, pcRace, pcFlaw;

pcName = document.getElementById('pcName');
pcClass = document.getElementById('pcClass');
pcRace = document.getElementById('pcRace');
pcFlaw = document.getElementById('pcFlaw');

var nameArr = ['Jeff', 'Henry', 'Mambo', 'Muumuu', 'Varis'];
var classArr = ['Barbarian', 'Bard', 'Cleric', 'Fighter', 'Monk', 'Ranger', 'Rogue', 'Sorceror', 'Warlock', 'Wizard'];
var raceArr = ['Human', 'Elf', 'Half-elf', 'Tiefling', 'Half-orc', 'Halfling', 'Gnome'];
var flawArr = ['Angry', 'Smelly', 'Cowardly', 'Grumpy', 'High-strung'];

document.querySelector('#roll').addEventListener('click', function() {
    var ranName = Math.floor(Math.random() * nameArr.length);
    var ranClass = Math.floor(Math.random() * classArr.length);
    var ranRace = Math.floor(Math.random() * raceArr.length);
    var ranFlaw = Math.floor(Math.random() * flawArr.length);

    pcName.textContent = nameArr[ranName];
    pcClass.textContent = classArr[ranClass];
    pcRace.textContent = raceArr[ranRace];
    pcFlaw.textContent = flawArr[ranFlaw];

    pcName.classList.add('result');
    pcClass.classList.add('result');
    pcRace.classList.add('result');
    pcFlaw.classList.add('result');
});

