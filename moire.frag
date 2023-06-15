#ifdef GL_ES
precision mediump float;
#endif

// Moire GLSL shader by vvixi

uniform vec2 u_resolution;
uniform float u_time;

void main(){
    vec2 st = gl_FragCoord.xy/u_resolution.xy;
    vec3 color = vec3(0.0);

    vec2 pos = vec2(0.5) - st;

    float rad = length(fract(pos));
    float ang = atan(pos.y, pos.x);

    float f = cos(ang);

    f = fract(cos(ang + u_time / 4.) * sin(ang * 333.))*.9 + .2;
    f = fract(f - u_time / 10.);

	  color = vec3(0.4 - (.1, .9, .1), f, 0.5);

    gl_FragColor = vec4(color, 1.0);
}
