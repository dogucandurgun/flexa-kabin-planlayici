// Narrow entrances use one uninterrupted glass leaf and one handle.
export function doorLayout(width){
 const leaves=width<120?1:2;
 return {leaves,panels:leaves===1?[{start:-width/2,end:width/2}]:[{start:-width/2,end:0},{start:0,end:width/2}],handles:leaves===1?[width/2-9]:[-9,9]};
}
