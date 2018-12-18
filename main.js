var pcName, pcClass, pcRace, pcFlaw, pcEnemy;

pcName = document.getElementById('pcName');
pcClass = document.getElementById('pcClass');
pcRace = document.getElementById('pcRace');
pcFlaw = document.getElementById('pcFlaw');
pcEnemy = document.getElementById('pcEnemy');

var nameArr = ['Mambo', 'Varis', 'Puh-Puh', 'Gildwarg', 'Kurg', 'Clembeg', 'Timjert', 'Narkoo', 'Krush', 'Laiex', 'Gorluin', 'Sugr', 'Jifn', 'Olfin', 'Dardil', 'Krun', 'Rin', 'Gnank', 'Sufta', 'Puld', 'Jedediah', 'Arnoldus', 'Millesant', 'Roysa'];
var classArr = ['Barbarian', 'Bard', 'Cleric', 'Druid', 'Fighter', 'Monk', 'Paladin', 'Ranger', 'Rogue', 'Sorceror', 'Warlock', 'Wizard'];
var raceArr = [' Human', ' Elf', ' Half-elf', ' Tiefling', ' Half-orc', ' Halfling', ' Gnome', ' Dwarf', ' Dragonborn', ' Aarakocra', ' Goliath', ' Gensai', ' Kenku', ' Aasimir', ' Firbolg', ' Bugbear', ' Goblin', ' Hobgoblin', ' Kobold', ' Lizardfolk', ' Orc', ' Tabaxi', ' Triton', ' Yuan-ti', ' Tortle', ' Gith', ' Changeling', ' Kalashtar', ' Warforged', ' Shifter'];
var flawArr = ['angry', 'smelly', 'cowardly', 'grumpy', 'high-strung', 'cantankerous', 'clingy', 'bossy', 'boring', 'cynical', 'greedy', 'impulsive', 'flirty', 'gullible', 'impolite', 'naughty', 'sarcastic', 'quick-tempered', 'ruthless', 'silly', 'stupid', 'stubborn', 'vulgar', 'vain'];
var enemyArr = ['Dragons', 'Beholders', 'Giants', 'Ghouls', 'Ghosts', 'Gnolls', 'Elementals', 'Golems', 'Krakens', 'Bandits', 'Vampires', 'Liches', 'Mages', 'Devils', 'Demons', 'Slaads', 'Mind Flayers', 'Hags', 'Necromancers', 'Aboleths', 'Purple Worms']

document.querySelector('#roll').addEventListener('click', function() {
    var ranName = Math.floor(Math.random() * nameArr.length);
    var ranClass = Math.floor(Math.random() * classArr.length);
    var ranRace = Math.floor(Math.random() * raceArr.length);
    var ranFlaw = Math.floor(Math.random() * flawArr.length);
    var ranEnemy = Math.floor(Math.random() * enemyArr.length);

    pcName.textContent = nameArr[ranName];
    pcClass.textContent = classArr[ranClass];
    pcRace.textContent = raceArr[ranRace];
    pcFlaw.textContent = flawArr[ranFlaw];
    pcEnemy.textContent = enemyArr[ranEnemy];

    pcName.classList.add('result');
    pcClass.classList.add('result');
    pcRace.classList.add('result');
    pcFlaw.classList.add('result');
    pcEnemy.classList.add('result');
});

document.querySelector('#share').addEventListener('click', function() {
    window.open("https://twitter.com/intent/tweet?text=" + "My name is " + pcName.textContent + ", and I'm a " + pcRace.textContent + ". I also happen to be the best " + pcClass.textContent + " around. I'm known for being a bit " + pcFlaw.textContent + ", but if you're looking to take on " + pcEnemy.textContent + ", I'm the best choice.", '_blank');
})
