song_status1 = "";
song_status2 = "";
lwx = 0;
lwy = 0;
rwx = 0;
rwy = 0;
s1 = "";
s2 = "";
score1l = 0;
score2r = 0;
function gs() {
window.location.href = 'index.html';
}
function preload(){
s1 = loadSound("ap.mp3");
s2 = loadSound("s.mp3");
}
function setup(){
canvas = createCanvas(400, 400);
canvas.center();
video = createCapture(VIDEO);
video.hide();
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}
function modelLoaded(){
console.log('PoseNet Is Initialized');
}
function gotPoses(results)
{
if(results.length > 0)
{
console.log(results);
lwx = results[0].pose.leftWrist.x;
rwx = results[0].pose.rightWrist.x;
lwy = results[0].pose.leftWrist.y;
rwy = results[0].pose.rightWrist.y;
}
score1l = results[0].pose.keypoints[9].score;
score2r = results[0].pose.keypoints[10].score;
}
function draw(){
image(video, 0,0, 600, 500);
song_status1 = s1.isPlaying();
song_status2 = s2.isPlaying();
fill("#FF0000");
stroke("#FF0000");
if(score2r > 0.2)
{ 
circle(rwx,rwy,20);
s2.stop();
if(song_status1 == false)
{
s1.play();
document.getElementById("song_name").innerHTML = "Believer";
}
}
if(score1l > 0.2)
{
circle(lwx,lwy,20);
s1.stop();
if(song_status2 == false)
{
s2.play();
document.getElementById("song_name").innerHTML = "Ed sheeran shape of you";
}
}
}
function sd(){
window.location.href = 'mp.html';
}