
//Get class name topHeroes to access
var topHeroes = document.querySelector('.topHeroes');
	//console.log(topHeroes);
var heroName = document.getElementById('heroName');
var heroRole = document.getElementById('heroRole');
var herodesc = document.getElementById('heroDescription');
	//console.log(heroName + heroRole + heroDesc);

var heroDetail = document.querySelector('.heroDetail');
heroDetail.addEventListener('click', function() { this.style.display = 'none' ;});
//console.log(heroDetail);

var allHeroListPage = document.querySelector('.allHeroListPage');
	//console.log(allHeroList);

var heroData = [ 
	{
		image: "images/Lesley.jpg",
		name: "Lesley",
		story: "Back Story - Lesley",
		description: "Lesley grew up in the Vance household, where her father presided over the noble family's security. During an attack by a rival family, Lesley's father was killed. As the assailants approached the Vance household, Lesley took up her father's black long rifle and fulfilled her late father\'s mission. Tears rolled down Lesley's cheeks as she fired shot after shot, each one taking down an assassin. The final tear came as the final.",
		role: "Marksman",
		isSpecial: true
	},
	{
		image: "images/Change.jpg",
		name: "Change",
		story: "Back Story - Chang'e",
		description: "Chang'e is the youngest disciple of the Great Dragon. She exhibited amazing magical potential from an early age, quickly mastering the Great Dragon's greatest spell — The Sacred Satellite. From then on, Chang'e earned the eternal love of the Great Dragon. However, Change's energetic and playful personality gave the Great Dragon quite a few headaches so he finally asked Zilong, his adopted son, to look after Chang\'e. The Great Dragon was hopeful that Zilong's diligent and determined character could help guide Chang'e.",
		role: 'Mage',
		isSpecial: true
	},
	{
		image: "images/Khufra.jpg",
		name: "Khufra",
		story: "Back Story - Khufra",
		description: "In the far reaches of the Western Desert, an ancient city lays hidden among the sands. Despite ages passing by, the desert sands were unable to devour this city, which stands proud and majestic in a sea of emptiness. Scholars of antiquities have long spoke of this fabled city, whose most infamous ruler was none other than Khufra. Khufra was a greedy ruler, colder than ice, and avaricious to limitless extents. In order to satisfy his personal desire to rule, he led the powerful army of Arnak to invade the city to conquer the Western Desert. Tirelessly, Khufra expanded his domain and riches beyond compare.",
		role: "Tank",
		isSpecial: true
	},
	{
		image: "images/Zilong.jpg",
		name: "Zilong",
		story: "Back Story - Zilong",
		description: "There was a tale of a Great Dragon that had nine sons. They were unique to each other and responsible for their own duties. Seldom did the Great Dragon gather with his sons, however, as the adopted son, Zilong assisted the Great Dragon instead of the royal sons. In the eyes of the Great Dragon, Zilong was way better in his personalities and abilities, which made Zilong deeply trusted by him. Long ago, Zilong swore an oath to roam from world to world, assisting wise rulers by the Great Dragon's decree.",
		role: "Fighter",
		isSpecial: true
	},
	{
		image: "images/Dyrroth.jpg",
		name: "Dyrroth",
		story: "Back Story - Dyrroth",
		description: "Thirty years ago, a prince was born in the Moniyan Empire. He was a symbol of salvation and justice for his people. It was believed that he would lead the Moniyan Empire in unifying the Land of Dawn. The Empire Nobles gave everything to the prince. On the day of prince’s first birthday he was found dead in his baby bed blanketed in blood. The room was covered with claw marks and the guards in charge of protecting the prince were also found dead.",
		role: "Fighter",
		isSpecial: true
	},
	{
		image: "images/angela.jpg",
		name: "Angela",
		story: "Back Story - Angela",
		description: "There was a tale of a Great Dragon that had nine sons. They were unique to each other and responsible for their own duties. Seldom did the Great Dragon gather with his sons, however, as the adopted son, Zilong assisted the Great Dragon instead of the royal sons. In the eyes of the Great Dragon, Zilong was way better in his personalities and abilities, which made Zilong deeply trusted by him. Long ago, Zilong swore an oath to roam from world to world, assisting wise rulers by the Great Dragon's decree.",
		role: "Fighter",
		isSpecial: false
	},
	{
		image: "images/bruno.jpg",
		name: "Bruno",
		story: "Back Story - Bruno",
		description: "Thirty years ago, a prince was born in the Moniyan Empire. He was a symbol of salvation and justice for his people. It was believed that he would lead the Moniyan Empire in unifying the Land of Dawn. The Empire Nobles gave everything to the prince. On the day of prince’s first birthday he was found dead in his baby bed blanketed in blood. The room was covered with claw marks and the guards in charge of protecting the prince were also found dead.",
		role: "Marksman",
		isSpecial: false
	},
	{
		image: "images/yuzhong.jpg",
		name: "Yu Zhong",
		story: "Back Story - Yu Zhong",
		description: "Thirty years ago, a prince was born in the Moniyan Empire. He was a symbol of salvation and justice for his people. It was believed that he would lead the Moniyan Empire in unifying the Land of Dawn. The Empire Nobles gave everything to the prince. On the day of prince’s first birthday he was found dead in his baby bed blanketed in blood. The room was covered with claw marks and the guards in charge of protecting the prince were also found dead.",
		role: "Fighter",
		isSpecial: false
	},
	{
		image: "images/irithel.jpg",
		name: "Irithel",
		story: "Back Story - Irithel",
		description: "Thirty years ago, a prince was born in the Moniyan Empire. He was a symbol of salvation and justice for his people. It was believed that he would lead the Moniyan Empire in unifying the Land of Dawn. The Empire Nobles gave everything to the prince. On the day of prince’s first birthday he was found dead in his baby bed blanketed in blood. The room was covered with claw marks and the guards in charge of protecting the prince were also found dead.",
		role: "Marksman",
		isSpecial: false
	},
	{
		image: "images/ling.jpg",
		name: "Ling",
		story: "Back Story - Ling",
		description: "Thirty years ago, a prince was born in the Moniyan Empire. He was a symbol of salvation and justice for his people. It was believed that he would lead the Moniyan Empire in unifying the Land of Dawn. The Empire Nobles gave everything to the prince. On the day of prince’s first birthday he was found dead in his baby bed blanketed in blood. The room was covered with claw marks and the guards in charge of protecting the prince were also found dead.",
		role: "Assasin",
		isSpecial: false
	}

];

createSpecialHero();
createHeroesListPage();

function createHeroesListPage() {
	for(var i = 0; i < heroData.length; i++) {
		//console.log(i);
		var div = document.createElement('div');
		div.setAttribute('data-index', i);
		div.setAttribute('class', 'heroListItems');
		div.style.display = 'inline-block';
		div.style.padding = '10px';
		div.style.marginRight = '10px';
		div.style.cursor = 'pointer';

		var imageElem = document.createElement('img');
		imageElem.src = heroData[i].image;
		imageElem.style.display = 'inline-block';
		imageElem.style.borderRadius = '50%';

		var heroLabel = document.createElement('p');
		heroLabel.innerHTML = heroData[i].name;
		heroLabel.style.textAlign = 'center';

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
}

function createSpecialHero() {
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

			var nameLabel = document.createElement('p');
			nameLabel.innerHTML = heroData[i].name;
			nameLabel.style.textAlign = 'center';
		
			div.appendChild(imageEl);
			div.appendChild(nameLabel);
			topHeroes.appendChild(div);
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

function hideDetails(heroDetails) {
	heroDetails.style.display = 'none';
}
