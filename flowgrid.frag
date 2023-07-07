#ifdef GL_ES
precision mediump float;
#endif

// Flowgrid GLSL shader by vvixi

uniform vec2 u_resolution;
uniform float u_time;

void main(){
  vec2 st = gl_FragCoord.xy / u_resolution.xy;
  st *= u_resolution.x / u_resolution.y;
  vec3 color = vec3(0.0);
  float dis = 0.0;

  st = abs(atan(st));
  st = cos(exp(st) * 88.0);

  dis = length((fract(st) + dis));
  dis = fract(dis + u_time);

  gl_FragColor = vec4(vec3(fract(dis - u_time * 0.222),fract(dis) + 0.4, cos(u_time)), 0.9);
}
