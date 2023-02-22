leftwristX = 0;
rightwristX = 0;
difference = 0;

function setup()
{
    video = createCapture(VIDEO);
    video.size(500,450);

    canvas = createCanvas(500,450);
    canvas.position(560,100);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw()
{
    background("gray")
    fill("black");
    stroke("white");
    textSize(difference);
    text("Bob the Builder", 20, 200);
}

function modelLoaded()
{
    console.log('PoseNet has been confirmed, SIUUUUUUUUUU');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        leftwristX = results[0].pose.leftWrist.x;
        rightwristX = results[0].pose.rightWrist.x;
        difference = floor(leftwristX - rightwristX);
    }
}