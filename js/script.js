function randomGif(){
	$.get( "http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=new+york+city", function( data ) {
	var img = '<img src=" ' + data.data.fixed_width_small_url + ' ">';
  	console.log(data);
  	$("#random-gif-container").html(img);
});
}
$("#random-gif-btn").click( function(){
	randomGif();
});

