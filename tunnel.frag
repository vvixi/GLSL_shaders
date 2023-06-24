#ifdef GL_ES
precision mediump float;
#endif

// Tunnel GLSL shader by vvixi

uniform vec2 u_resolution;
uniform float u_time;

void main() {
    vec2 st = gl_FragCoord.xy / u_resolution.xy;
    vec3 color = vec3(0.0);

    vec2 pos = vec2(-0.5) * st;

    float rad = length(pos)*.3;
    float ang = atan(pos.y,pos.x);
    float f = (cos(ang / rad * .3 -u_time)*(ang * 2.)) * 0.7 - 0.1;

    color = vec3(max(rad / f, f), cos(1.0 * f), abs(rad));

    gl_FragColor = vec4(color, 1.0);
}
