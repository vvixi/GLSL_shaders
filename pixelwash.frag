#ifdef GL_ES
precision mediump float;
#endif

// Pixel Wash GLSL shader by vvixi

uniform vec2 u_resolution;
uniform float u_time;

float random (vec2 st) {
    return fract(dot(st.xy, vec2(2.988, 8.533)) * 
        38.5453123 - u_time);
}

void main() {
    vec2 st = gl_FragCoord.xy / u_resolution.xy;
    st *= 14.0;

    vec2 iCoord = floor(st);
    vec2 fCoord = fract(st);

    // set a random value based on the integer coord
    vec3 color = vec3(random(iCoord), 0.1, random(fCoord));

    gl_FragColor = vec4(color, 1.0);
}
