#ifdef GL_ES
precision mediump float;
#endif

// GLSL shader by vvixi

uniform vec2 u_resolution;
uniform float u_time;

void main() {
  
    vec2 st = gl_FragCoord.xy / u_resolution.xy;
    vec3 color = vec3(0.0);

    vec2 pos = vec2(0.5) - st;

    float rad = length(pos) * 2.0;
    float ang = atan(pos.y, pos.x);

    float f = cos(ang / u_time);

    f = abs(cos(ang + u_time * 2.) * fract(ang * 3.)) * .9 + .2;

	  color = vec3(0.8 - (.4, .2, f), 0.23, 0.1);

    gl_FragColor = vec4(color, 1.0);
}
