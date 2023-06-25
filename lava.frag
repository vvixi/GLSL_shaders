#ifdef GL_ES
precision mediump float;
#endif

// Lava GLSL shader by vvixi

uniform vec2 u_resolution;
uniform float u_time;

void main() {
  vec2 st = gl_FragCoord.xy / u_resolution.xy;
  st.x *= u_resolution.x / u_resolution.y;
  vec3 color = vec3(0.0);
  float dis = 0.0;

  st = ((st) / .51);
  st = abs(st);
  st = cos(abs(st));

  // Make the distance field
  dis = length(exp((st * atan(cos(st))) + fract(dis - u_time * 0.1112)));

  // Drawing with the distance field
  gl_FragColor = vec4(vec3(fract(dis), smoothstep(0.6, 0.5, dis), 0.1),1.0);
}
