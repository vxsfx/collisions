width = 500
height = 500

g = 10

function draw_walls(ctx){
  ctx.beginPath();   
  ctx.lineWidth = 10;
  ctx.moveTo(0,0)
  ctx.lineTo(500, 0)
  ctx.lineTo(500,500)
  ctx.lineTo(0, 500)
  ctx.lineTo(0,0)
  ctx.stroke()
}

function drawPoint(ctx, point){
  ctx.fillStyle="red"
  ctx.beginPath();
  ctx.arc(point.x, point.y, point.r, 0, 2 * Math.PI);
  ctx.stroke();
}

function collide(point){
  

  if(point.x < 10){
    point.v.x = -point.v.x;
  }
  if(point.y < 10){
    point.v.y = -point.v.y;
  }
  if(point.x > 490){
    point.v.x = -point.v.x;
  }
  if(point.y > 490){
    point.v.y = -point.v.y;
  }
}

function update(ctx, points){
  
  ctx.clearRect(10, 10, 480, 480);
  
  (points).forEach(point => {
    
    //point.v.y += g/10
    //point.x += point.v.x
    //point.y += point.v.y
    

    collide(point);
    
    drawPoint(ctx, point)
  });
}

function point(x,y, r){
  return {x:x, y:y, r:r, v:{x:10,y:6}};
}

async function delay(t){
  return new Promise((r)=>{setTimeout(r, t)});
}

async function init(){
  var p = point(50,50,10);
  const cv = document.getElementById("cv");
  const ctx = cv.getContext("2d");

  draw_walls(ctx);
  for(var i = 0; i < 1000; i++){
    update(ctx, [p])
    await delay(50);    
  }

}