
//Get class name topHeroes to access
var topHeroes = document.querySelector('.topHeroes');
	//console.log(topHeroes);
var heroName = document.getElementById('heroName');
var heroRole = document.getElementById('heroRole');
var herodesc = document.getElementById('heroDescription');
var durability = document.getElementById('durability');
var offense = document.getElementById('offense');
var ability = document.getElementById('ability');
var difficulty = document.getElementById('difficulty');
	//console.log(heroName + heroRole + heroDesc);

var heroDetail = document.querySelector('.heroDetail');
heroDetail.style.display = 'none';
heroDetail.addEventListener('click', function() { this.style.display = 'none' ;});
//console.log(heroDetail);

var allHeroListPage = document.querySelector('.allHeroListPage');
	//console.log(allHeroList);

var heroData = [ 
	{
		image: "pic/lesley.jpg",
		name: "Lesley",
		story: "Back Story - Lesley",
		description: "A ghostly sniper-type marksman hero with superior critical damage combining with highly effective ability effects and advantage in long-range kills.",
		role: "( Marksman )",
		isSpecial: true,
		durability:  '90%',
		offense:  '80%',
		ability:  '65%',
		difficulty:  '55%'
	},
	{
		image: "pic/change.jpg",
		name: "Change",
		story: "Back Story - Chang'e",
		description: "Chang'e is the best mage hero in Mobile Legends who takes form of a little girl who rides the moon while holding a rabbit. She has a terrifying power with a quite high damage and fairly good control effect.",
		role: '( Mage )',
		isSpecial: true,
		durability:  '85%',
		offense:  '85%',
		ability:  '80%',
		difficulty:  '60%'
	},
	{
		image: "pic/khufra.jpg",
		name: "Khufra",
		story: "Back Story - Khufra",
		description: "Khufra is a Tank with strong CC. who can dash towards enemies and stop enemies from using blink skills.",
		role: "( Tank )",
		isSpecial: true,
		durability:  '90%',
		offense:  '45%',
		ability:  '80%',
		difficulty:  '80%'
	},
	{
		image: "pic/zilong.jpg",
		name: "Zilong",
		story: "Back Story - Zilong",
		description: "Zilong is a powerful warrior that excels in dealing high damage per second and supporting allies by hindering and sending enemies to their doom. Since he is easy to use, both newbies and veterans alike can utilize him to achieve flawless victories.",
		role: "( Fighter )",
		isSpecial: true,
		durability:  '60%',
		offense:  '55',
		ability:  '70%',
		difficulty:  '50%'
	},
	{
		image: "pic/dyrroth.jpg",
		name: "Dyrroth",
		story: "Back Story - Dyrroth",
		description: "Dyrroth is the prince of the Abyss with equal cleverness and power. He has a balanced damage output and health",
		role: "( Fighter )",
		isSpecial: true,
		durability:  '80%',
		offense:  '65%',
		ability:  '75%',
		difficulty:  '60%'
	},
	{
		image: "pic/angela.jpg",
		name: "Angela",
		story: "Back Story - Angela",
		description: "Angela is one of the most popular support heroes in Mobile Legends. She possesses the power to not only support and heal, but also to damage and debuff. All of her skills are miraculous and wonderful. In fact, with her on the battlefield, there's no need to fear any harm or inconvenience that may come.",
		role: "( Support )",
		isSpecial: false,
		durability:  '75%',
		offense:  '55%',
		ability:  '75%',
		difficulty:  '55%'
	},
	{
		image: "pic/bruno.jpg",
		name: "Bruno",
		story: "Back Story - Bruno",
		description: "Bruno kicks an energy ball at a designated hero, dealing 250 (+83% Total Physical ATK) points Physical Damage, knocking back the target and reducing the Physical Defense of the target by 3. Afterwards the energy ball will ricochet among enemy heroes ( Up to 10 times).",
		role: "( Marksman )",
		isSpecial: false,
		durability:  '90%',
		offense:  '80%',
		ability:  '45%',
		difficulty:  '30%'
	},
	{
		image: "pic/yu-zhong.jpg",
		name: "Yu Zhong",
		story: "Back Story - Yu Zhong",
		description: "Yu Zhong, The Black Dragon, with three forms and a secondary resource that is powered by his passive. His ultimate lets him transform into a large black dragon, giving him crowd control immunity and the ability to knock back enemies.",
		role: "( Fighter )",
		isSpecial: false,
		durability:  '85%',
		offense:  '90%',
		ability:  '90%',
		difficulty:  '80%'
	},
	{
		image: "pic/irithel.jpg",
		name: "Irithel",
		story: "Back Story - Irithel",
		description: "Irithel is one of the strongest marksman in the game in terms of the damage it can deliver to your opponent. ... Because of her ultimate skill, she can easily swipe the entire enemy team and can kill each enemy heroes with just three hits thus making her the ultimate marksman you can use for the game.",
		role: "( Marksman )",
		isSpecial: false,
		durability:  '80%',
		offense:  '70%',
		ability:  '65%',
		difficulty:  '40%'
	},
	{
		image: "pic/ling.jpg",
		name: "Ling",
		story: "Back Story - Ling",
		description: "Ling is a new interesting Assassin hero in Mobile Legends with a Burst Damage and Reap specialty. What's unique about Ling is his ability to walk and leap through walls, which makes him incredibly mobile and stealthy�perfect for an Assassin role.",
		role: "( Assasin )",
		isSpecial: false,
		durability:  '95%',
		offense:  '85%',
		ability:  '90%',
		difficulty:  '80%'
	}

];

//createSpecialHero();
createHeroesListPage();

function createHeroesListPage() {
	for(var i = 0; i < heroData.length; i++) {
		//console.log(i);
		var div = document.createElement('div');
		div.setAttribute('data-index', i);
		div.setAttribute('class', 'heroList');
		div.style.display = 'inline-block';
		div.style.padding = '10px';
		div.style.marginRight = '10px';
		div.style.marginBottom = '10px';
		div.style.cursor = 'pointer';

		var imageElem = document.createElement('img');
		imageElem.src = heroData[i].image;
		imageElem.style.display = 'inline-block';
		imageElem.style.background = '#0BACE0'; 
		imageElem.style.borderRadius = '10px';

		var heroLabel = document.createElement('p');
		heroLabel.innerHTML = heroData[i].name;
		heroLabel.style.textAlign = 'center';
		heroLabel.style.color = 'white';
		heroLabel.style.fontWeight = 'bold';


		div.appendChild(imageElem);
		div.appendChild(heroLabel);
		allHeroListPage.appendChild(div);
		//console.log(allHeroListPage);
		div.addEventListener('click', onAllHeroHandler);
	}
}

function onAllHeroHandler(event) {
	//var targetValue = event.target.value;
	heroDetail.style.display = 'flex';
	var targetValue = this.dataset.index;
	heroListImage.src = heroData[targetValue].image;
	heroListName.innerHTML = heroData[targetValue].name;
	heroListRole.innerHTML = heroData[targetValue].role;
	heroListDesc.innerHTML = heroData[targetValue].description;

	durability.innerHTML = 'Durability ' + heroData[targetValue].durability;
	durability.style.width = heroData[targetValue].durability;

	offense.innerHTML = 'Offense ' + heroData[targetValue].offense;
	offense.style.width = heroData[targetValue].offense;

	ability.innerHTML = 'Ability ' + heroData[targetValue].ability;
	ability.style.width = heroData[targetValue].ability;

	difficulty.innerHTML = 'Difficulty ' + heroData[targetValue].difficulty;
	difficulty.style.width = heroData[targetValue].difficulty;

}

/*function createSpecialHero() {
	for(var i = 0; i < heroData.length; i++) {
		if(heroData[i].isSpecial == true) {
			var div = document.createElement('div');
			div.setAttribute('data-index', i);
			div.setAttribute('class', 'hero-item');
			div.style.display = 'inline-block';
			div.style.cursor = 'pointer';
			div.style.border = '1px solid #999';
			div.style.padding = '10px';
			div.style.marginRight = '10px';

			var imageEl = document.createElement('img');
			imageEl.src = heroData[i].image;
			imageEl.style.margin = '0 auto';
			imageEl.style.display = 'block';
			imageEl.style.marginBottom = '20px';
			imageEl.style.borderRadius = '50%';
			imageEl.style.transition = '3s';

			var nameLabel = document.createElement('p');
			nameLabel.innerHTML = heroData[i].name;
			nameLabel.style.textAlign = 'center';
		
			div.appendChild(imageEl);
			div.appendChild(nameLabel);
			allHeroListPage.appendChild(div);
			div.addEventListener('click', onHeroDataHandler);	
		}
	}
}


function onHeroDataHandler(event) {
	//console.log(this.dataset.index);
	//var targetValue = event.target.value;
	var targetValue = this.dataset.index;
	heroName.innerHTML = heroData[targetValue].story;
	heroRole.innerHTML = heroData[targetValue].role;
	heroDescription.innerHTML = heroData[targetValue].description;
	hideDetails(mlDescription);
	//heroDetail.style.display = 'block';
}
*/

function hideDetails(heroDetails) {
	heroDetails.style.display = 'none';
}
