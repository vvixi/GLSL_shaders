#ifdef GL_ES
precision mediump float;
#endif

// Distortion shader by vvixi 

uniform vec2 u_resolution;
uniform float u_time;

void main(){
  vec2 st = gl_FragCoord.xy / u_resolution.xy;
  st.x *= u_resolution.x / u_resolution.y;
  vec3 color = vec3(0.0);
  float dis = 0.0;
  st = st / fract(sin(st) - u_time * 0.0511);
  dis = fract(length(max(abs(sin(st)) - 0.1, 0.2)));
  gl_FragColor = vec4(vec3(0.44, fract(dis * 16.0 - u_time * 0.111), 0.33), 1.0);
}
