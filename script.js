//your JS code here. If required.
const ul = document.createElement("ul");
ul.id = "band";
const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];
function stripArticle(name) {
  return name.replace(/^(a |an |the )/i, '').trim();
}

bands.sort((a, b) => {
  return stripArticle(a).localeCompare(stripArticle(b));
});

// console.log(bands);
bands.forEach((ele)=>{
	const li = document.createElement('li')
	li.textContent = ele
	ul.append(li)
})
// console.log(ul)
document.body.append(ul)
