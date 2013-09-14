var remoteIP = "127.0.0.1";
var remotePort : int = 36700;
var listenPort : int = 36700;
var useNAT : boolean = false;
var yourIP = "";
var yourPort = "";
var level : String = "asdasd";

var player : GameObject;

var supportedNetworkLevels : String[] = [ "asdasd"  ];


function OnGUI () {

	if (Network.peerType == NetworkPeerType.Disconnected)
	{
		if (GUI.Button (new Rect(10,10,100,30),"Connect"))
		{
			//Network.useNAT = useNAT;
			
			Network.Connect(remoteIP,remotePort);
		}
		if (GUI.Button (new Rect(10,50,100,30), "Start server"))
		{
			//Network.useNAT = useNAT;
		
			
			//creating server
			if (level != "")
			{
				print(level);
				Network.InitializeServer(32, listenPort,false);
				
				for (var go : GameObject in FindObjectsOfType(GameObject))
				{
					go.SendMessage("OnNetworkLoadedLevel",SendMessageOptions.DontRequireReceiver);
				}
				BattleBegins();
			}
		}
		
		
		remoteIP = GUI.TextField(new Rect(120,10,100,20),remoteIP);
		remotePort = parseInt(GUI.TextField(new Rect(230,10,40,20),remotePort.ToString()));
		
			GUILayout.BeginArea(Rect(0, Screen.height - 30, Screen.width, 30));
			GUILayout.BeginHorizontal();

			for (var levelA : String in supportedNetworkLevels)
			{
				if (GUILayout.Button(levelA))
				{
					level = levelA;
					//Network.RemoveRPCsInGroup(0);
					//Network.RemoveRPCsInGroup(1);
					//networkView.RPC( "LoadLevel", RPCMode.AllBuffered, level, lastLevelPrefix + 1);
				}
			}
			GUILayout.FlexibleSpace();
			GUILayout.EndHorizontal();
			GUILayout.EndArea();
			
			//GUI.Button(Rect(200,200,200,40),"Start server in map "+level);
	}
	

			
	//else
	//{
		
		//ipaddress = Network.player.ipAddress;
		//port = Network.player.port.ToString();
		
		//GUI.Label(new Rect(140,300,250,40),"IP Adress: "+ipaddress+":"+port);
		//if (GUI.Button (new Rect(10,300,100,50),"Disconnect"))
		//{
		//	Network.Disconnect(200);
		//	Application.LoadLevel(Application.loadedLevel);
		//}
	//}
}

function OnConnectedToServer () {
	for (var go : GameObject in FindObjectsOfType(GameObject)){
		go.SendMessage("OnNetworkLoadedLevel",SendMessageOptions.DontRequireReceiver);
	}
	BattleBegins();

}

//function OnConnectedToServer () {
 // Notify our objects that the level and the network are ready
// for (var go : GameObject in FindObjectsOfType(GameObject))
//  go.SendMessage("OnNetworkLoadedLevel", 
//SendMessageOptions.DontRequireReceiver);  
//}

function BattleBegins(){
	GetComponent(SelectSpawn).enabled = true;
	playerASD = Instantiate(player,new Vector3(0,0,0),new Quaternion(0,0,0,1));
	playerASD.gameObject.name = "player";
	DontDestroyOnLoad(playerASD);
	Application.LoadLevelAdditive(level);
}

function Awake () {
    DontDestroyOnLoad (transform.gameObject);
}
