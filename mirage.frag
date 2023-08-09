#ifdef GL_ES
precision mediump float;
#endif

// Mirage shader by vvixi

uniform vec2 u_resolution;
uniform float u_time;

vec3 palette(float t) {

  vec3 a = vec3(0.5, 0.5, 0.5);
  vec3 b = vec3(0.5, 0.5, 0.5);
  vec3 c = vec3(1.0, 1.0, 1.0);
  vec3 d = vec3(0.263, 0.416, 0.557);

  return a + b*cos(6.28318 * (c * t + d));
}

void main() {
    vec2 st = (gl_FragCoord.xy * 2.0 - u_resolution.xy) / u_resolution.y;
    float ang = u_time * 0.01;
    st = fract(u_time * 0.111 / st);
    float d = length(st/ang);
    vec3 color = palette(d + u_time * 0.02);

    d = fract(d * 8.0 - u_time) - 0.2;
    d = atan((d));
    d = 0.04 / d;

    color *= d;

    for (float i = 0.0; i < 1.; i += 0.0113) {
      st = abs(-st);
      st -= 0.22;
      st *= mat2(cos(ang), sin(ang), sin(ang), cos(ang));
    }
    gl_FragColor = vec4(color, 1.0);
}
