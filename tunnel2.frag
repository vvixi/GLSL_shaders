#ifdef GL_ES
precision mediump float;
#endif

// Tunnel 2 shader in GLSL by vvixi

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

void main(){

    vec2 st = gl_FragCoord.xy/u_resolution.xy;
    vec3 color = vec3(0.0);

    vec2 pos = vec2(-.5) * st;

    float rad = length(pos)*.3;
    float ang = atan(pos.y,pos.x);

    float f = (cos(ang/rad * .3 -u_time)*(ang * 2.))*.7 - .1;

    color = vec3(max(rad, sin(rad)*f), cos(1. * f), abs(rad));

    gl_FragColor = vec4(color, 1.0);
}
