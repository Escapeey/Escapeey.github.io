var now=new Date;function createtime(){var e=new Date("18/10/2023 00:18:00");now.setTime(now.getTime()+250);var t=(now-e)/1e3/60/60/24,n=Math.floor(t),o=(now-e)/1e3/60/60-24*n,r=Math.floor(o);1==String(r).length&&(r="0"+r);var a=(now-e)/1e3/60-1440*n-60*r,w=Math.floor(a);1==String(w).length&&(w="0"+w);var i=(now-e)/1e3-86400*n-3600*r-60*w,g=Math.round(i);1==String(g).length&&(g="0"+g)}setInterval((()=>{createtime()}),250);