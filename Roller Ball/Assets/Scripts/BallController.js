#pragma strict

var rotationSpeed = 100;
var jumpHeight = 0;


var distToGround : float;

function Start () {
	//getting distance from center of the ball to the ground.
	distToGround = GetComponent.<Collider>().bounds.extents.y;

}

var Hit01 : AudioClip;
var Hit02 : AudioClip;
var Hit03 : AudioClip;

function Update ()
{
	//Player Moving
	var rotation : float = Input.GetAxis ("Horizontal") * rotationSpeed;
	rotation *= Time.deltaTime;
	GetComponent.<Rigidbody>().AddRelativeTorque (Vector3.back * rotation);
	
	//Player Jumping
	if (Input.GetKeyDown(KeyCode.W) || Input.GetKeyDown(KeyCode.Space) || Input.GetKeyDown(KeyCode.UpArrow) && IsGrounded())
	{
		
		GetComponent.<Rigidbody>().velocity.y = jumpHeight;
		
		
		
	}
	
	
	
}

function IsGrounded () : boolean
{
	return Physics.Raycast(transform.position, -Vector3.up, distToGround + 0.2);
}


function OnCollisionEnter () {

var TheHit = Random.Range(0,3);
		
		if (TheHit == 0) 
		{
			GetComponent.<AudioSource>().clip = Hit01;
		}
		else if (TheHit == 1){
			GetComponent.<AudioSource>().clip = Hit02;
		}
		else {
			GetComponent.<AudioSource>().clip = Hit03;
		}
		
		GetComponent.<AudioSource>().pitch = Random.Range(0.9,1.1);
		GetComponent.<AudioSource>().Play();


}

