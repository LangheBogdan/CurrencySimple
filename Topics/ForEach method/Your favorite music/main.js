const music = ["rock", "pop", "hip-hop", "electronic"];

function myFavoriteMusic(music) {
  // write your code
  music.forEach(function (music, index, arr) {
	console.log(`My favorite music is ${music} choosing from ${arr}`);
});

}
