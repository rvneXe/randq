let icons = {
  "space": "keyicons/space.png",
}

let iconsInline= document.querySelectorAll('[data-icon]')
console.log("ttt");

console.log(iconsInline);


iconsInline.forEach(icn=>{
  let type = icn.dataset.icon;
  let img = document.createElement('img');
  let src = icons[type];
  img.src = src;
  img.classList.add('img-emoji', `img-emoji-${type}`)
  icn.append(img)
  
})

/*iconsInline.forEach(icn=>{
	console.log("2tt");
	let type = icn.dataset.icon;
	let img = document.createElement('img');
	let src = icons[type];
	img.src = src;
	img.classList.add('img-emoji', `img-emoji-${type}`)
	icn.append(img)
})*/