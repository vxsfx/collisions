#include "structs.h"
#include <cmath>

struct Vector dot(struct Vector v1, struct Vector v2){
    struct Vector v = {v1.x * v2.x, v1.y * v2.y};
    return v;
}

float v_size(struct Vector v){
    return sqrt(v.x*v.x + v.y*v.y);
}

int main(){
    struct Vector square[4] = {
        {0, 0},
        {0,1},
        {1,1},
        {1,0}
    };    

    struct Force force = {
        {0,0},//pos
        {0,1}//dir
    };

    //need to find value between bvectors


    struct Vector Torque = dot(force.dir, square[0]);

    float deltaTime = 0.5f;

    struct mat2x2 rotation = {};

    for(struct Vector v : square){
        
    }



    return 0;
}