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

function collide(point, point2){
  cd = Math.sqrt( (point.x-point2.x)**2 + (point.y-point2.y)**2 );
  rd = point.r + point2.r;
  if(cd < rd){

    total_mass = point.r + point2.r
    total_dir = {x:point.x + point2.x ,y:point.y + point2.y}

    v1 = Math.sqrt(point.v.x**2 + point.v.y**2)
    v2 = Math.sqrt(point2.v.x**2 + point2.v.y**2)

    change_point = {x: point.x - point2.x, y:point.x - point2.x}


    cx = v1 - (2*point2.r / total_mass) * change_point.x * 
        (v1-v2)


    cy = v1 - (2*point2.r / total_mass) * change_point.y * 
        (change)












  }
}

function wall_collide(point){
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
    (points).forEach(point2 => {
      if(point != point2){
      collide(point, point2);
      }
    })


    wall_collide(point)
    
    //point.v.y += g/10
    point.x += point.v.x 
    point.y += point.v.y 
    drawPoint(ctx, point)
  });
}

// use rad as mass
function point(x,y, r, v){
  return {x:x, y:y, r:r, v:v};
}

async function delay(t){
  return new Promise((r)=>{setTimeout(r, t)});
}

async function init(){
  var p = point(50,50,10, {x:2, y:2});
  var p2 = point(200,200, 20, {x:1, y:-3})
  const cv = document.getElementById("cv");
  const ctx = cv.getContext("2d");

  points = [p2, p]

  draw_walls(ctx);
  for(var i = 0; i < 1000; i++){
    update(ctx, points)
    await delay(10);    
  }

}