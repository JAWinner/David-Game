
// Use this for initialization
function Start () {
static var boss = target.position - player.position;
  var distance;
var lookAtDistance = 10.0;
    var attackRange = 5.0;
    var moveSpeed = 3.0;
    var damping = 10.0;
    private var isItAttacking = false;
static var projectile : object;
Rigidbody2D projectile = (Instantiate(obj, pos, rot) as GameObject).GetComponent<Rigidbody2D>();
projectile.velocity = (right ? Vector2.right : -Vector2.right);
}

[Property] 
static var boss = loadlevel(5);
[Property]
static var projectile = loadlevel(5);

oncollision(collision player){
if(player.gameObject.tag ==("projectile"){
destroy.(player);
}
else if(player.gameObject.tag ==("boss"){
destroy.(player);
}

// Update is called once per frame
function Update () { 






}

