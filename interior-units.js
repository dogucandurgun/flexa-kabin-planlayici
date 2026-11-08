// Footprints include every visible component; all measurements are centimetres.
export const INTERIOR_UNITS={
 counter:{name:'Servis tezgâhı',w:85,d:60,h:90},
 table:{name:'Kafe masası',w:100,d:70,h:75},
 chair:{name:'Sandalye',w:50,d:55,h:85},
 stool:{name:'Bar taburesi',w:40,d:40,h:80},
 shelf:{name:'Ürün rafı',w:100,d:35,h:190},
 sofa:{name:'İkili oturma ünitesi',w:140,d:70,h:82},
 display:{name:'Sergileme bankosu',w:90,d:45,h:110},
 planter:{name:'Bitkilik',w:40,d:40,h:95}
};
export const INTERIOR_BASE=.6;
export function interiorSpec(item){return INTERIOR_UNITS[item.unit]||INTERIOR_UNITS.counter;}
export function interiorParts(item){
 const parts=[],add=(w,h,d,x,y,z,finish='frame')=>parts.push({w,h,d,x,y,z,finish});
 const legs=(x,z,height,width=4)=>{for(const a of [-1,1])for(const b of [-1,1])add(width,height,width,a*x,height/2,b*z);};
 switch(item.unit||'counter'){
 case 'table':legs(44,29,71);add(100,4,70,0,73,0,'wood');break;
 case 'chair':legs(20,22,42,3);add(50,4,55,0,44,0,'accent');add(50,39,4,0,65.5,-25.5,'accent');break;
 case 'stool':legs(15,15,76,3);add(40,4,40,0,78,0,'wood');break;
 case 'shelf':for(const x of [-48,48])add(4,190,35,x,95,0);for(const y of [3,49,95,141,187])add(92,3,35,0,y,0,'wood');break;
 case 'sofa':legs(60,25,10,5);add(140,30,70,0,25,0,'accent');add(116,6,53,0,43,8.5,'cushion');add(140,42,12,0,61,-29,'accent');for(const x of [-64,64])add(12,21,58,x,50.5,6,'accent');break;
 case 'display':legs(39,17,7,4);add(90,4,45,0,9,0,'wood');for(const x of [-43,43])add(4,95,45,x,58.5,0);add(82,95,4,0,58.5,-20.5,'accent');for(const y of [42,74])add(82,3,41,0,y,2,'wood');add(90,4,45,0,108,0,'wood');break;
 case 'planter':add(40,43,40,0,21.5,0,'accent');add(34,2,34,0,44,0,'soil');add(3,32,3,0,61,0,'frame');for(const [x,y,z,w,h,d] of [[-9,67,0,14,26,10],[8,76,3,13,29,10],[-3,86,-5,12,18,12]])add(w,h,d,x,y,z,'leaf');break;
 default:add(73,4,48,0,2,0);add(79,82,54,0,45,0,'wood');add(85,4,60,0,88,0);
 }
 return parts;
}
