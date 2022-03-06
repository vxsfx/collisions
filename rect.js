cv = document.getElementById("cv")
ctx = cv.getContext("2d")

function rect(x, y, w, h){
  return {x:x, y:y, w:w, h:h};
}


function drawRect(rect){
  ctx.rect(rect.x, rect.y, rect.w, rect.h)
}


function hasCollided(rect1, rect2){
  tlDiff = {x: rect2.x - rect1.x, y: rect2.y - rect1.y}

  brDiff = {x:(rect2.x + rect2.w) - (rect1.x + rect1.w) ,y:(rect2.y + rect2.h) - (rect1.y + rect1.h)} 

  d1 = {x: rect1.w, y: rect1.h}
  d2 = {x: rect2.w, y: rect2.h}

  if( (d1.x + d2.x) > (tlDiff.x + brDiff.x) && (d1.y + d2.y) > (tlDiff.y + brDiff.y)){
    return true;
  }
  return false;
}

function altHasCollided(rect1, point){
  return (0 < rect1.w - (rect1.x - point.x) && 0 < rect1.h - (rect1.y - point.y))
}

async function delay(t){
  return new Promise((r)=>{setTimeout(r, t)});
}

async function main(){
  rect1 = rect(0, 10, 10, 50)
  rect2 = rect(0, 300, 50, 40)
  
  for(x=0; x < 10000; x++){
    
    ctx.clearRect(0,0,cv.width, cv.height);
    drawRect(rect1)
    ctx.fill();
    drawRect(rect2)
    ctx.fill();
    if(hasCollided(rect1, rect2)){
      console.log("collided")
      break;
    }
    rect1.y += 1;
    rect2.y -= 1;
    
    await delay(50)
  
  }
}