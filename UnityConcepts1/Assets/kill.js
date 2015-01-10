function OnTriggerEnter (other : Collider) {
	print("trigger");
	if (other.tag == "Player"){
		print("with player");
		Application.LoadLevel(0);
	}
}

function OnCollisionEnter(collision : Collision) {
	print("collision");
}