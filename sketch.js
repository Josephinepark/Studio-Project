let noiseScale = .1
let webcam;
let selectMenu;
let option;
let Images = [];
let displayedImages = [];

function preload() {
 Images[0] = loadImage('image/meme1.png');
 Images[1] = loadImage('image/meme2.png');
 Images[2] = loadImage('image/meme3.png');
 Images[3] = loadImage('image/meme4.png');
 Images[4] = loadImage('image/meme5.png');
 Images[5] = loadImage('image/meme6.png');
 Images[6] = loadImage('image/meme7.png');
 Images[7] = loadImage('image/meme8.png');
 Images[8] = loadImage('image/meme9.png');

 Images[9] = loadImage('image/map1.png');
 Images[10] = loadImage('image/map2.png');
 Images[11] = loadImage('image/map3.png');
 Images[12] = loadImage('image/map4.png');
 Images[13] = loadImage('image/map5.png');
 Images[14] = loadImage('image/map6.png');

 Images[15] = loadImage('image/word1.png');
 Images[16] = loadImage('image/word2.png');
 Images[17] = loadImage('image/word3.png');
 Images[18] = loadImage('image/word4.png');
 Images[19] = loadImage('image/word5.png');
 Images[20] = loadImage('image/word6.png');
 Images[21] = loadImage('image/word7.png');
 Images[22] = loadImage('image/word8.png');
}

function setup() {
  background(255,100,255);
  createCanvas(windowWidth,windowHeight);

  // webcam
  webcam = createCapture(VIDEO);
  webcam.size(200, 150);
  webcam.hide();

}

function draw() {
  
  // noise background
  for (let x=0; x<width; x++){
    let noiseVal = noise((mouseX+x)*noiseScale, mouseY*noiseScale);
    stroke(noiseVal*255,random(0,155),242);
    line(x,mouseY+noiseVal*80,x,height);
  }
  

    filter(THRESHOLD);
  
  for (let imgData of displayedImages) {
    image(imgData.img, imgData.x, imgData.y,imgData.img.width/2,imgData.img.height/2);

  }

  // webcam
  
  image(webcam, windowWidth/2 - 100, windowHeight/2 - 100);

}

function mouseClicked(){
  let firstImg = random(Images);
  let secondImg = random(Images);

  let firstImgData = {
    img: firstImg,
    x: random(windowWidth - firstImg.width),
    y: random(windowHeight - firstImg.height)
  };

  let secondImgData = {
    img: secondImg,
    x: random(windowWidth - secondImg.width),
    y: random(windowHeight - secondImg.height)
  };

  displayedImages.push(firstImgData, secondImgData);
}


