using UnityEngine;
 
using UnityEditor;
 
using System;
 
public class MeshPostprocessor : AssetPostprocessor 
 
{
void OnPreprocessModel() 
 
{
 
    ModelImporter importer = assetImporter as ModelImporter;
 
    importer.swapUVChannels = false;
 
    importer.generateSecondaryUV = true;
		
	importer.globalScale = 1.0f;
    //this line is not working
    importer.generateAnimations = ModelImporterGenerateAnimations.None;
		
 
    importer.animationType = ModelImporterAnimationType.None;
 
}
}
