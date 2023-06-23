#ifdef GL_ES
precision mediump float;
#endif

// Ripple GLSL shader by vvixi

uniform vec2 u_resolution;
uniform float u_time;

void main() {

  vec2 st = gl_FragCoord.xy / u_resolution.xy;
  vec3 color = vec3(0.0);
  float dis = 0.0;

  st = (st * 0.5);
  st -= .25;
  st = (cos(st));
  st = fract(cos(-st) / .005);
  st = exp(sin(st));
  
  dis = fract(length(st) + dis);
  dis = fract(dis - u_time);

  gl_FragColor = vec4(vec3(0, sin(.3 - u_time * 0.2111), sin(dis), .9);
}
