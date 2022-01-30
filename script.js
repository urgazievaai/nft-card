document.body.style.margin = '0';
document.body.style.backgroundColor = 'hsl(217, 54%, 11%)';
document.body.style.fontFamily = 'Outfit, sans serif';
document.body.style.fontSize = '18px';


//WRAPPER
const wrapper = document.createElement('div');
wrapper.id = 'wrapper';
wrapper.style.width = '1440px';
wrapper.style.margin = '0 auto';
wrapper.style.marginTop = '100px'
wrapper.style.display = 'flex';
wrapper.style.justifyContent = 'center';
wrapper.style.flexWrap = 'wrap';
wrapper.style.gap = '20px';
document.body.appendChild(wrapper);

//CARD
 const card = document.createElement('div');
 card.className = 'card';
 card.style.width = '300px';
 //card.style.height = '500px';
 card.style.marginBottom = '100px';
 card.style.backgroundColor = 'hsl(216, 50%, 16%)';
 card.style.padding = '20px 20px 0';
 card.style.borderRadius = '5px';
 wrapper.appendChild(card);

 //CARD IMG
 const image = document.createElement('IMG');
 image.className = 'card-img';
 image.setAttribute('src', './img/image-equilibrium.jpg');
 image.style.maxWidth = '300px';
 image.style.maxHeight = '305px';
 image.style.borderRadius = '3px';
 image.style.marginBottom = '20px';
 card.appendChild(image);

 //TITLE
 const title = document.createElement('h3');
 title.className = 'card-title';
 title.textContent = 'Equilibrium #3429';
 title.style.margin = '0';
 title.style.marginBottom = '20px';
 title.style.color = 'hsl(0, 0%, 100%)';
 card.appendChild(title);

 //SUBTITLE
 const subtitle = document.createElement('p');
 subtitle.className = 'card-subtitle';
 subtitle.textContent = 'Our Equilibrium collection promotes balance and calm.';
 subtitle.style.margin = '0';
 subtitle.style.marginBottom = '20px'
 subtitle.style.color = 'hsl(215, 51%, 70%)';
 subtitle.style.fontWeight = '300';
 subtitle.style.lineHeight = '18px';
 card.appendChild(subtitle);

 // ITEMS UL
 const wrap = document.createElement('div');
 wrap.className = 'list-wrap';
 wrap.style.display = 'flex';
 wrap.style.justifyContent = 'space-between';
 wrap.style.marginBottom = '20px';
 card.appendChild(wrap);

 //ITEM LI
 const list1 = document.createElement('div');
 list1.className = 'card-list';
 //list1.style.position = 'absolute';
 wrap.appendChild(list1);
 
 //ITEM 1
 const icon1 = document.createElement('IMG');
 icon1.className = 'list-icon1';
 icon1.setAttribute('src', './img/icon-ethereum.svg');
 //icon1.style.position  = 'relative';
 icon1.style.marginRight = '5px';
list1.appendChild(icon1);

const item1 = document.createElement('p');
item1.className = 'list-item1';
item1.textContent = '0.041 ETH';
item1.style.display = 'inline-block';
item1.style.color = 'hsl(178, 100%, 50%)';
item1.style.margin = '0';
item1.style.fontWeight = '600';
list1.appendChild(item1);

//ITEM2 LI
const list2 = document.createElement('div');
list2.className = 'card-list';
//list2.style.position = 'absolute';
wrap.appendChild(list2);

//ITEM2
const icon2 = document.createElement('IMG');
icon2.className = 'list-icon2';
icon2.setAttribute('src', './img/icon-clock.svg');
//icon2.style.position  = 'relative';
icon2.style.marginRight = '5px';
list2.appendChild(icon2);

const item2 = document.createElement('p');
item2.className = 'list-item2';
item2.textContent = '3 days left';
item2.style.display = 'inline-block';
item2.style.color = 'hsl(215, 51%, 70%)';
item2.style.margin = '0';
//item2.style.fontWeight = '600';
list2.appendChild(item2);

//LINE
const line = document.createElement('hr');
line.style.borderColor = 'hsl(215, 32%, 27%)';
card.appendChild(line);



// FOOTER img
const creatWrap = document.createElement('div');
creatWrap.style.display = 'flex';
creatWrap.style.alignItems = 'center';
creatWrap.style.marginBottom = '20px';
card.appendChild(creatWrap);


const avatar = document.createElement('IMG');
avatar.className = 'avatar';
avatar.setAttribute('src', './img/image-avatar.png');
avatar.style.maxWidth = '30px';
avatar.style.border = 'solid white 1px';
avatar.style.borderRadius = '20px';
avatar.style.margin = '0';
avatar.style.marginRight = '15px';
creatWrap.appendChild(avatar);

// FOOTER name



const creat = document.createElement('p');
creat.className = 'creatName';
creat.textContent = 'Creation of';
creat.style.color = 'hsl(215, 51%, 70%)';
creat.style.textAlign = 'center';
creat.style.fontSize = '15px';
creat.style.margin = '0';
creat.style.display = 'inline-block';
creat.style.marginRight = '5px';
creatWrap.appendChild(creat);

const creatName = document.createElement('span');
creatName.textContent = 'Jules Wyvern';
creatName.style.color = 'hsl(0, 0%, 100%)';
creatName.style.fontSize = '15px';
creatWrap.appendChild(creatName);

