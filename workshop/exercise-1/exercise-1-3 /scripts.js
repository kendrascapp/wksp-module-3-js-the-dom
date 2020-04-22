
document.body.style.background = "rgba(246,187,33, .8) url('./images/yellow-umbrella.jpg') no-repeat";
document.body.style.fontFamily = "Playfair Display', serif";
document.body.style.backgroundSize = "100%";
// get the element that already exists in the html
const box1 = document.getElementById("main");
box1.style.background = "#fafafa";
box1.style.borderRadius = "4px";
box1.style.minWidth = "320px";
box1.style.maxWidth = "320px";
box1.style.padding = "25px";
box1.style.margin = "30px";
// create the h1 element
const header = document.createElement('h1');
header.innerText = 'The best How I Met Your Mother episode (according to fans)';
document.querySelector('#main').appendChild(header);
header.style.fontFamily = "'Open Sans', sans-serif";
header.style.textAlign = "center";
// create the p element
const par1 = document.createElement('p');
par1.innerText = 'As impossible as it seems to name just 1 of the 208 legendary episodes as the “best”, the fans have spoken and the highest rated episode is… wait for it…';
document.getElementById('main').appendChild(par1);

const subTitle = document.createElement('h2');
subTitle.innerText = 'The Slap Bet (Season 2, Episode 9)';
document.getElementById('main').appendChild(subTitle);

const rating = document.createElement('p');
rating.innerText = 'IMDB Rating: 9.5';
document.getElementById('main').appendChild(rating);

const pic = document.createElement('img');
pic.setAttribute('src', 'images/robin-sparkles.jpg');
pic.setAttribute('alt', 'Robin Sparkles');
document.getElementById('main').appendChild(pic);

const par2 = document.createElement('p');
par2.innerText = 'In this episode, Ted is learning a few secrets about Robin, namely that she has an unexplained aversion to the mall. Robin refuses to tell Ted and the others why she won’t go to the mall, so the gang forms their own theories. Marshall believes it’s because she got married in a mall and is still married. Barney believes it has something to do with Robin having performed in a porn video. The two of them make a slap bet with each other: whoever is right gets to slap the other across the face as hard as he can. Lily is named the Slap Bet Commissioner, as long as she promises to be unbiased';
document.getElementById('main').appendChild(par2);

const par3 = document.createElement('p');
par3.innerText = 'In the end, Robin’s big secret was revealed- she was a Canadian, teen pop sensation named Robin Sparkles. Barney finds the music video for her hit single “Lets Go To The Mall”. The slap bet takes a few turns throughout the episode, but ends with Marshall having the right to slap Barney 5 times- available for all of eternity (horrible call Barney).';
document.getElementById('main').appendChild(par3);

const source = document.createElement('a');
source.innerText = 'Source';
source.setAttribute('href', 'https://himym2017.wordpress.com/2017/03/25/the-best-himym-episode-according-to-fans/');
document.getElementById('main').appendChild(source);











