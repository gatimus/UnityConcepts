var target : Transform; 
var moveSpeed = 6; 
var rotationSpeed = 6; 
var myTransform : Transform; 

function Awake() {
	myTransform = transform; 
}

function Start() {
	target = GameObject.FindWithTag("Player").transform; 
}

function Update () {
   if (!renderer.isVisible){
    myTransform.rotation = Quaternion.Slerp(myTransform.rotation,
    Quaternion.LookRotation(target.position - myTransform.position), rotationSpeed*Time.deltaTime); 
    myTransform.position += myTransform.forward * moveSpeed * Time.deltaTime;
    }
}


