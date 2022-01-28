
//bit flag struct
// struct packed_struct {
//    unsigned int f1:1;
//    unsigned int f2:1;
//    unsigned int f3:1;
//    unsigned int f4:1;
//    unsigned int type:4;
//    unsigned int my_int:9;
// } pack;

struct Vector {
    float x;
    float y;
}

struct Force{
    struct Vector pos;
    struct Vector dir;
    //float scalar;
}

struct mat2x2 {
    Vector x;
    Vector y;
}
