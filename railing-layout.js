// Matches FLEXA reference renders: black posts, top rail and slim vertical pickets.
export function railingParts(start,end){
 const length=end-start;if(length<6)return [];if(length<12)return [{center:(start+end)/2,w:length,h:105,y:52.5,d:4}];const parts=[],add=(center,w,h,y,d=4)=>parts.push({center,w,h,y,d});
 // Local elevations are measured from the finished floor; no coplanar overlaps.
 const bays=Math.max(1,Math.ceil((length-4)/120)),posts=[];
 for(let i=0;i<=bays;i++){const center=start+2+(length-4)*i/bays;posts.push(center);add(center,4,101,50.5);}
 add((start+end)/2,length,4,103,5);
 for(let i=0;i<posts.length-1;i++){const a=posts[i]+2,b=posts[i+1]-2;if(b-a<=0)continue;add((a+b)/2,b-a,3,8,3);const count=Math.max(0,Math.ceil((b-a)/11)-1);for(let j=1;j<=count;j++)add(a+(b-a)*j/(count+1),1.5,91.5,55.25,1.5);}
 return parts;
}
