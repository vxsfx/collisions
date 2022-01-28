width = 500
height = 500

g = 10

x=0
y=1

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

function particle(pos, vel, rad ){
  return {x:pos.x, y:pos.y, v:vel, r:rad}
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

function collide(point, other){
  tr = point.r + other.r //use rad as mass
  delta_x = point.x - other.x
  delta_y = point.y - other.y

  ds = delta_x*delta_x + delta_y*delta_y
  d = Math.sqrt(ds);

  if(d < tr){
    M1 = (2 * other.r) / tr // total_mass = total rad
    M2 = (2 * point.r) / tr
    

    delta_vx = point.v.x - other.v.x
    delta_vy = point.v.y - other.v.y


    S1 =  (delta_vx * delta_x + delta_vy * delta_y) / ds 
    //S2 =  (-delta_vx * -delta_x + -delta_vy * -delta_y) / (d*d) // S2 = - * - =  + anyway

    point.v.x -= M1 * S1 * delta_x
    point.v.y -= M1 * S1 * delta_y

    other.v.x -= M2 * S1 * -delta_x
    other.v.y -= M2 * S1 * -delta_y
  }


}


function update(ctx, points){
  
  ctx.clearRect(10, 10, 480, 480);

  checked = 1
  for(var i = 0; i < points.length; i++){
    wall_collide(points[i])
    for(var b = checked; b < points.length; b++){  
      collide(points[i], points[b]);
    }
    points[i].x += points[i].v.x
    points[i].y += points[i].v.y
    drawPoint(ctx, points[i])
    checked ++;
  }
}

async function delay(t){
  return new Promise((r)=>{setTimeout(r, t)});
}

async function init(){
  
  //var p2 = particle( {x:60, y:100}, {x:3, y:3}, 15 );
  //var p = particle(  {x:250, y: 400}, {x:2, y:2}, 10);

  const cv = document.getElementById("cv");
  const ctx = cv.getContext("2d");

  points = []

  for (i=0; i<200; i++){
    px = Math.random() * 400 + 20
    py = Math.random() * 400 + 20
    r = Math.random() * 10
    vx = Math.random() * 10 - 5
    vy = Math.random() * 10 - 5
    points.push(particle({x:px, y:py}, {x:vx,y:vy}, r))
  }


  draw_walls(ctx);
  for(var i = 0; i < 1000; i++){
    update(ctx, points)
    await delay(1);    
  }

}