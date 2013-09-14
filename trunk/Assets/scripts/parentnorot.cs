using UnityEngine;
using System.Collections;

public class parentnorot : MonoBehaviour {
	
	public Transform P;
	private Vector3 paroffset;
	
	// Use this for initialization
	void Start () {
		paroffset = P.position - transform.position;
	}
	
	// Update is called once per frame
	void Update () {
		transform.position = P.position + paroffset;
	}
}
