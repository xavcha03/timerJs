/**
 *
 */
function typewriter(str, dest, start = 0) {
	console.log(str[start]);
	dest.innerHTML = dest.innerHTML + str[start];
	if (start < str.length - 1) {
		let time = Math.round((Math.random() * 1000) / 4);
		if (str[start == " "] || str[start] === ".") time * 5;
		setTimeout(() => typewriter(str, dest, start + 1), time);
	}
}

typewriter(
	document.querySelector("#source").innerHTML,
	document.querySelector("#destination"),
	0
);
