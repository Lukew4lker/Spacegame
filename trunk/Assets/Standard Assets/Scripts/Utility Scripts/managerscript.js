//game size
static var gameSize : int;

//vessel class limits
static var maxAllGunShipF1 : int;
static var maxAllGunShipF2 : int;
static var maxAllDestroyerF1 : int;
static var maxAllDestroyerF2 : int;
static var maxAllBattleShipF1 : int;
static var maxAllBattleShipF2 : int;
static var maxAllCruiserF1 : int;
static var maxAllCruiserF2 : int;
static var maxAllDoomF1 : int;
static var maxAllDoomF2 : int;

//total allowed ships
static var maxAllShipsF1 : int;
static var maxAllShipsF2 : int;

//ships in use
static var OnFlGunShipF1 : int;
static var OnFlGunShipF2 : int;
static var OnFlDestroyerF1 : int;
static var OnFlDestroyerF2 : int;
static var OnFlBattleShipF1 : int;
static var OnFlBattleShipF2 : int;
static var OnFlCruiserF1 : int;
static var OnFlCruiserF2 : int;
static var OnFlDoomF1 : int;
static var OnFlDoomF2 : int;
static var OnFlShipsF1 : int;
static var OnFlShipsF2 : int;

static var shipIDcounter : int = 1000;
static var playerIDcounter : int = 2000;


//ship class sizes

function MySize (shiptype) {

var crew : int;

switch (shiptype) {
	case "gunShip":
		crew = 2;
		break;
	case "destroyer":
		crew = 1;
		break;
	case "battleShip":
		crew = 4;
		break;
	case "doomBringer":
		crew = 6;
		break;
}

return crew;

}

function MyHealth (shiptype) {

var health : int;

switch (shiptype) {
	case "gunShip":
		health = 800;
		break;
	case "destroyer":
		health = 450;
		break;
	case "battleShip":
		health = 1300;
		break;
	case "doomBringer":
		health = 2200;
		break;
}

return health;

}


