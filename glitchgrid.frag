#ifdef GL_ES
precision mediump float;
#endif

// Glitch grid GLSL shader by vvixi

uniform vec2 u_resolution;
uniform float u_time;

vec3 palette(float t) {

  vec3 a = vec3(0.5, 0.5, 0.5);
  vec3 b = vec3(0.5, 0.5, 0.5);
  vec3 c = vec3(1.0, 1.0, 1.0);
  vec3 d = vec3(0.263, 0.416, 0.557);

  return a + b * cos(6.28318 * (c * t + d));
}
void main() {

  vec2 st = gl_FragCoord.xy / u_resolution.xy;
  vec3 color = vec3(0.0);
  float dis = 0.0;
  vec3 finalCol = vec3(0.0);

  for (float i = .0; i < 27.; i += 1.2) {
    
    st = fract(st * 2.0);
    float ang = u_time * 0.01;
    float d = length(abs(st));
    vec3 color = palette(length(st / ang) - u_time * 0.2);
    d = cos(d * 3.0 - u_time) / 2.0;
    d = 0.04 / (abs((d) * fract(ang)));
    finalCol = fract(color) * d;
  }

  dis = length(fract(abs(st) - 0.3 * u_time) );
  gl_FragColor = vec4(finalCol, 0.8);
}
