#ifdef GL_ES
precision mediump float;
#endif

// GLSL shader by vvixi

#define PI 3.14159265359
#define TWO_PI 6.28318530718

uniform vec2 u_resolution;
uniform float u_time;

void main(){
    
  vec2 st = gl_FragCoord.xy / u_resolution.xy;
  vec3 color = vec3(0.0);
  float dis = 0.0;
  
  st = st * 2.0 -1.0;

  int sides = 7;
  float ang = atan(abs(st.x), fract(st.y)) - u_time;
  float rad = TWO_PI / float(sides);

  // shaping function
  dis = exp(floor(0.5 + ang / rad) * rad - ang) * length(st * 0.8);

  color = vec3((0.33, 0.39, dis), 0.0, 0.42);

  gl_FragColor = vec4(color, 1.0);
}
