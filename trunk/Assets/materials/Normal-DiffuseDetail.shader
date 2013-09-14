Shader "STARS" {
Properties {
	_Color ("Main Color", Color) = (1,1,1,1)
	_MainTex ("Base (RGB)", 2D) = "white" {}
	_Detail ("Detail (RGB)", 2D) = "gray" {}
	_Detail2 ("Detail (RGB)", 2D) = "gray" {}
}

SubShader {
	Tags { "RenderType"="Opaque" }
	LOD 250
	
CGPROGRAM
#pragma surface surf Lambert

sampler2D _MainTex;
sampler2D _Detail;
sampler2D _Detail2;
fixed4 _Color;

struct Input {
	float2 uv_MainTex;
	float2 uv_Detail;
	float2 uv_Detail2;
};

void surf (Input IN, inout SurfaceOutput o) {
	fixed4 l1 = tex2D(_MainTex, IN.uv_MainTex).rgbb * _Color;
	fixed4 l2 = tex2D(_Detail,IN.uv_Detail);
	fixed3 c = l1.rgg;
	c.rgb += l2.rgg*l1.b;
	c.rgb += tex2D(_Detail2,IN.uv_Detail2).rgg*l2.b;
	o.Albedo = c.rgb;
	o.Emission = c.rgb;
}
ENDCG
}

Fallback "Diffuse"
}
 