#pragma strict

var Music : AudioSource;

function QuitGame (){
	
	Application.Quit (); 
}

function StartGame (level : String) {
	Application.LoadLevel(level);
 } 
 
 function SetGameVolume (vol : float){
 	Music.volume = vol;
 }