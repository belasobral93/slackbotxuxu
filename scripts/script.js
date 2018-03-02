// Description:
//
//
// Dependencies:
//   None
//
// Configuration:
//   None
//
// Commands:
//

var musicOptions = ["Evening Acoustic: goo.gl/dZegsv", "Throwback Thursday: goo.gl/jp3yDu", 
	"Beach Vibes: goo.gl/DheGq8", "Disco Forever: goo.gl/6dKCaG"];

module.exports = function(robot) {
    robot.respond(/spotify station/, function(res) {
	    var musicSelection = musicOptions[Math.floor(Math.random() * musicOptions.length)];   
	    return res.send("You should listen to " + musicSelection);
    	});
	
    robot.respond(/I want to listen to (.*)/i, function(msg){
    	var genre;
    	genre = msg.match[1];
    	if (genre == "techno"){
    		return msg.reply("You should listen to this playlist: goo.gl/utrKFJ");
    	} else if (genre == "hip hop"){
    		return msg.reply("You should listen to this playlist: goo.gl/7YLpdN");

    	} 
    	else {
    		return msg.reply("You should listen to techno or hip hop");
    	}
    });

	robot.hear(/favArtist/, function(res) {
	  var attachments = {imageUrl: "https://www.billboard.com/files/styles/article_main_image/public/stylus/110118-empire_of_the_sun_617_409.jpg"};
	  return res.send(attachments.imageUrl);
	});

    };


/************************************

EXAMPLES OF THE KEY HUBOT FUNCTIONS

************************************/

/* Variables for random example */

// const squirrels = ["http://img.skitch.com/20100714-d6q52xajfh4cimxr3888yb77ru.jpg", "https://img.skitch.com/20111026-r2wsngtu4jftwxmsytdke6arwd.png", "http://cl.ly/1i0s1r3t2s2G3P1N3t3M/Screen_Shot_2011-10-27_at_9.36.45_AM.png", "http://shipitsquirrel.github.com/images/squirrel.png"];

// module.exports = function(robot) {
//   /* Basic example of respond / send. If the user enters hi or hello the bot responds "Howdy!" */
//   return robot.respond(/hi|hello/i, function(msg) {
//     return msg.send("Howdy!");
//   });

//   /* Random Example
//   If a user enters 'ship it' we return a random squirrel, which is popular for symbolizing shipping something with engineers */
//   return robot.hear(/ship it/i, function(msg) {
//     return msg.send(msg.random(squirrels));
//   });
// };
