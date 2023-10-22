function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(550,500);
    canvas.center();
    poseNet=ml5.poseNet(video,modelloaded);
    poseNet.on("pose",gotposes);

}

function modelloaded(){
    console.log("posenet is initialized");
    
}

function gotposes(results){
    if(results.length>0){
        console.log(results);
    }
}


function draw(){
    background("#c7c1c1");
    }