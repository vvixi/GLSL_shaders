#ifdef GL_ES
precision mediump float;
#endif

// Melt GLSL shader by vvixi

uniform vec2 u_resolution;
uniform float u_time;

void main() {
	vec2 st = gl_FragCoord.xy / u_resolution;
    vec3 color = vec3(0.0);

    st *= 3.0;
    st = fract(abs(st - u_time * 0.11) / cos(st.x));
    
    color = vec3(0.11, 0.11, (st.x-st.y));

	gl_FragColor = vec4(color, 1.0);
}
