#pragma strict

var maxFallDistance = -10;

private var isRestarting = false;

var GameOverSound : AudioClip;

function Update () {
	if (transform.position.y <= maxFallDistance)
	{
		if (isRestarting == false){
		RestartLevel();
		GameMaster.currentScore = 0;
		}	
	}}
 
function RestartLevel () {
	isRestarting = true;
	GetComponent.<AudioSource>().clip = GameOverSound;
	GetComponent.<AudioSource>().Play();
	yield WaitForSeconds (GetComponent.<AudioSource>().clip.length);
	Application.LoadLevel('level01');
}