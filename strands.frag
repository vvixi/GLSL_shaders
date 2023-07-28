#ifdef GL_ES
precision mediump float;
#endif

// Strands GLSL shader by vvixi

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

void main(){
  vec2 st = gl_FragCoord.xy / u_resolution.xy;
  st.x *= u_resolution.x / u_resolution.y;
  vec3 color = vec3(0.0);
  float dis = 0.0;

  st = fract(atan(st) /2.0);
  st = abs(st) + 1.0;
  // Make the distance field
  dis = length(max((st / 0.1) - 0.01, 0.01));
  
  // Visualize the distance field
  gl_FragColor = vec4(vec3(fract(dis * 4.0 * u_time / 92.0),fract(u_time - dis), cos(dis + u_time)), 1.0);
}
