// The exhibition ground is never selectable. A cabin floor selects its module, but only after anything standing on it
// or seen through clear glass, so roof-less (cutaway) cabins can still be picked by clicking inside them.
export function pickSelectable(hits,items,filter='all'){
 const byId=new Map(items.map(o=>[o.id,o]));let throughGlass=null;
 for(const hit of hits){const data=hit.object.userData||{},item=byId.get(data.id);if(!item||filter!=='all'&&item.kind!==filter)continue;
 if(data.selectionSurface==='floor')return throughGlass??item.id;
 if(filter==='all'&&data.passThrough){throughGlass??=item.id;continue;}
 return item.id;
 }
 return throughGlass;
}
