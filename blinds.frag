#ifdef GL_ES
precision mediump float;
#endif

// Blinds GLSL Shader by vvixi

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

void main(){
    vec2 st = gl_FragCoord.xy/u_resolution.xy;
    vec3 color = vec3(0.0);

    vec2 pos = vec2(0.5) - st;

    float rad = length(pos) * 2.0;
    float ang = exp(abs(pos.y) * atan(pos.x));

    float f = abs(fract(sin(ang / st.x) * 56.0 -u_time) / fract(ang + st.x)) * 0.47 - 0.1;

    color = vec3(max(f, f - rad), cos(8.0), abs(f));

    gl_FragColor = vec4(color, 1.0);
}
