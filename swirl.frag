#ifdef GL_ES
precision mediump float;
#endif

// Swirl GLSL shader by vvixi

uniform vec2 u_resolution;
uniform float u_time;

void main() {
  vec2 coord = 3.0 * gl_FragCoord.xy / u_resolution;

  for (int n = 1; n < 8; n++) {
      float i = float(n);
      coord -= vec2(0.7 / i * sin(coord.y + u_time *.0005) + 0.8, i * sin(coord.x + u_time * 0.03) * 1.6);
    }
    
  vec3 color = vec3(0.02 * sin(coord.x), 0.0, sin(u_time + coord.y) + 0.6);
  
  gl_FragColor = vec4(color, 1.0);
}
