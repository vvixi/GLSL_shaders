#ifdef GL_ES
precision mediump float;
#endif

// Oilslick GLSL shader by vvixi

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

    st = (abs(cos(st) + u_time * .000111)) - ang;
    float d = length(st * ang * 10.0);
    vec3 color = palette(abs(d) + u_time * 0.2);
    d = sin(d * 99.111 - u_time) / 2.;
    d = abs((d));
    d = 0.0222 + d;

    color *= sin(d * u_time * .1);

    for (float i = .0; i < 1.; i += 0.0113) {
      st = abs(-st);
      st -= .22;
      st *= exp(st);
      st *= mat2(cos(ang), sin(ang), sin(ang), cos(ang));
    }
    gl_FragColor = vec4(color, 1.0);
}
