noseX = 0
noseY = 0

difference = 0;

rightwristX = 0;
leftwristX = 0;


function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);
    canvas = createCanvas(550, 500);
    canvas.position(760, 150);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);

}

function modelLoaded() {
    console.log("PoseNet is intialized!!")
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        rightwristX = results[0].pose.rightWrist.x;
        leftwristX = results[0].pose.leftWrist.x;
         difference = floor(leftwristX - rightwristX );
        
    }   

}

function draw() {
    background("#e9baff");
    document.getElementById("squareSide").innerHTML = "width and height of the square will be = " + difference + "px";
    
    fill("lightblue");
    //square(noseX, noseY, difference);
//circle(noseX, noseY, difference);
textSize(difference);
text("Vishu",noseX, noseY);


}

