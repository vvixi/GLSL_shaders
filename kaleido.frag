#ifdef GL_ES
precision mediump float;
#endif

// Kaleido GLSL shader by vvixi

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
    vec2 st = (gl_FragCoord.xy * 2. - u_resolution.xy) / u_resolution.y;
    float ang = u_time * 0.1;
    st = sin(u_time * 0.111 + abs(st) * ang);

    float d = length(st / ang);
    vec3 color = palette(d + u_time * 0.2);

    d = sin(d * 60.0 - u_time) / 4.0 * ang;
    d = abs((d));
    d = 0.02 / d;

    color *= d;

    for (float i = .0; i < 33.; i += 1.53) {
      st += .22;
    } 
    
    gl_FragColor = vec4(color, 1.0);
}
