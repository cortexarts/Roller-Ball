#pragma strict

var coinEffect : Transform;
var CoinValue = 1;

function OnTriggerEnter (info : Collider)
{
	if (info.tag == "Player")
	{
		GameMaster.currentScore += CoinValue;
		var effect =Instantiate(coinEffect, transform.position, transform.rotation);
		Destroy(effect.gameObject, 3);
		Destroy(gameObject);
	}
}