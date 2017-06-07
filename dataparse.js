
var datacol=[
{"type": "numeric", "name": "Godine", "values": [  2000,  2001,  2002,  2003,  2004,  2005,  2006,  2007,  2008,  2009,  2010,  2011,  2012,  2013,  2014,  2015]}
,{"type": "numeric", "name": "Jabuke", "values": [64077,22405,44160,46340,63092,57298,57571,62991,57341,73924,89124,99676,37414,121738,96703,96182]}
,{"type": "numeric", "name": "Kruške", "values": [4352,2872,2878,3249,4926,1591,3363,4427,3294,3570,3308,5083,1230,4124,2909,3782]}
,{"type": "numeric", "name": "Breskve_i_nektarine", "values": [6941,7085,8043,4848,5995,5171,4721,3696,5315,7806,6356,8940,4618,4998,4403,5261]}
,{"type": "numeric", "name": "Breskve", "values": [0,0,0,0,0,0,0,0,0,0,5466,7806,3516,3606,3185,3659]}
,{"type": "numeric", "name": "Nektarine", "values": [0,0,0,0,0,0,0,0,0,0,890,1134,1102,1392,1218,1602]}
,{"type": "numeric", "name": "Marelice", "values": [471,233,338,368,376,261,724,675,869,464,408,675,244,629,364,337]}
,{"type": "numeric", "name": "Trešnje_i_višnje", "values": [8416,8185,7552,7349,4551,5084,5312,5930,7654,5253,4994,9081,6469,12227,10688,6777]}
,{"type": "numeric", "name": "Trešnje", "values": [2920,2233,2943,2516,2307,3498,3141,2723,3863,2126,1115,2120,2342,3927,795,1405]}
,{"type": "numeric", "name": "Višnje", "values": [5496,5952,4609,4833,2244,1586,2171,3207,3791,3127,3879,6961,4127,8300,9893,5372]}
,{"type": "numeric", "name": "Šljive", "values": [22261,22123,11418,23745,33104,12630,15288,19867,15812,13579,20403,24849,9936,29349,5649,9069]}
,{"type": "numeric", "name": "Orasi", "values": [4480,2971,2540,3183,3527,7204,6890,7510,1966,1964,4279,2641,861,902,2848,635]}
,{"type": "numeric", "name": "Lješnjaci", "values": [0,0,0,0,176,366,702,957,911,1016,2964,1548,344,1561,908,1462]}
,{"type": "numeric", "name": "Bademi", "values": [2357,2146,2175,1297,1091,777,568,536,651,1493,143,143,1582,74,69,54]}
,{"type": "numeric", "name": "Smokve", "values": [4084,3870,3695,3335,3459,1108,914,1093,1388,1221,908,1287,1266,908,725,699]}
,{"type": "numeric", "name": "Jagode", "values": [1085,1114,1331,1357,1520,2156,2553,1171,1342,1463,1776,1962,1281,3914,3167,2367]}
,{"type": "numeric", "name": "Bobičasto_voće_bez_jagoda", "values": [0,0,0,0,0,0,0,0,0,855,817,1193,324,975,478,1756]}
,{"type": "numeric", "name": "Naranče", "values": [497,583,503,463,332,574,556,531,416,524,202,315,269,145,106,158]}
,{"type": "numeric", "name": "Mandarinke", "values": [18995,17656,15757,10449,14470,7576,41201,41655,48297,35907,55000,41870,50786,40024,64378,35722]}
,{"type": "numeric", "name": "Limuni", "values": [403,502,472,438,397,213,218,459,247,236,138,200,195,240,181,183]}
,{"type": "numeric", "name": "Grožđe", "values": [182436,186175,188749,183451,174536,181021,179426,197979,185256,206437,207743,204373,187550,181096,134941,154227]}
,{"type": "numeric", "name": "Masline", "values": [16215,19413,32955,9482,20613,36602,27530,34527,35955,32592,38001,31423,50945,34269,8840,28267]}
,{"type": "numeric", "name": "Svježe_voće_(okućnica)", "values": [50943,41167,38121,44320,67813,51945,68773,82813,79360,71777,60756,45923,23698,26763,15105,16074]}
];

function setData(){
var data = { 
    nodes : [],
	links : []
};

var i,j,k;
k=0;
for(i=0;i<22;i++){
	var jsonData = {};
	var fruit=datacol[i+1]["name"];
	var value=datacol[i+1]["values"][0];
	jsonData["name"] = fruit;
	jsonData["node"] = i;
	jsonData["kind"] = "kinds";
	jsonData["value"] = value;
	data.nodes.push(jsonData);	
}

for(i=0;i<22;i++){
	var jsonData = {};
	var fruit=datacol[i+1]["name"];
	jsonData["name"] = fruit;
	jsonData["node"] = 22+i;
	jsonData["kind"] = "fruits";
	data.nodes.push(jsonData);	
}
for(i=0;i<22;i++){
	var jsonData = {};
	var source=i;
	var target=22+i;
	var value=datacol[i+1]["values"][0];
	jsonData["source"] = source;
	jsonData["target"] = target;
	jsonData["value"] = value;
	jsonData["kind"] = "links";
	data.links.push(jsonData);
}
for(i=0;i<16;i++){
	var jsonData = {};
	var year=datacol[0]["values"][i];
	var fruit=datacol[1]["name"];
	jsonData["name"] = year+"-"+fruit;
	jsonData["node"] = 44+i;
	jsonData["kind"] = "fruityear";
	data.nodes.push(jsonData);
}
for(i=0;i<16;i++){
	var jsonData = {};
	var source=0;
	var target=44+i;
	var value=datacol[1]["values"][i];
	jsonData["source"] = source;
	jsonData["target"] = target;
	jsonData["value"] = value;
	jsonData["kind"] = "linksyear";
	data.links.push(jsonData);
}
var json = JSON.stringify(data);
console.log(data);
return data;
}

function updateYear(year){
var data = { 
    nodes : [],
	links : []
};
var i,j,k;
k=0;
while(year!=datacol[0]["values"][k])
{k++;}
for(i=0;i<22;i++){
	var jsonData = {};
	var fruit=datacol[i+1]["name"];
	jsonData["name"] = fruit;
	jsonData["node"] = i;
	jsonData["kind"] = "kinds";
	data.nodes.push(jsonData);	
}

for(i=0;i<22;i++){
	var jsonData = {};
	var fruit=datacol[i+1]["name"];
	jsonData["name"] = fruit;
	jsonData["node"] = 22+i;
	jsonData["kind"] = "fruits";
	data.nodes.push(jsonData);
}
for(i=0;i<22;i++){
	var jsonData = {};
	var source=i;
	var target=22+i;
	var value=datacol[i+1]["values"][k];
	jsonData["source"] = source;
	jsonData["target"] = target;
	jsonData["value"] = value;
	jsonData["kind"] = "links";
	data.links.push(jsonData);
}
var json = JSON.stringify(data);
console.log(data);
return data;
}
function updateByFruit(){
	
}