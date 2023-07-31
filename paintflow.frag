#ifdef GL_ES
precision mediump float;
#endif

// Paintflow GLSL shader by vvixi

uniform vec2 u_resolution;
uniform float u_time;

mat3 rgb = mat3(1.0, 0.0, 0.1112,
                    1.0, -0.111, -0.111,
                    1.0, 0.1111, 0.0);

void main(){

    vec2 st = gl_FragCoord.xy/u_resolution;
    vec3 color = vec3(0.0);
    
    st *= 3.2;

    color = rgb * vec3(atan(sin(u_time) * 0.3), cos(st.x - u_time * 0.3), sin(st.y - u_time * 0.3));

    gl_FragColor = vec4(color,sin(1.0));
}
