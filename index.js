var Jimp = require("jimp");
 

Jimp.read("mypic.jpg").then(function (mypic) {
    
    for (w=0;w<lenna.bitmap.width;w++){

		for (h=0;h<lenna.bitmap.height;h++){
			console.log(w+h)
			if (lenna.getPixelColor(w,h) > 3535973887){
				console.log(lenna.getPixelColor(w,h))
				lenna.setPixelColor(8913151,w,h)
			}
			else{
				lenna.setPixelColor(0x0000000,w,h) 
			}
		}
	}
	return mypic
}).then(function(mypic){
	mypic.write("hi.jpg");
});
