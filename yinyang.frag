#ifdef GL_ES
precision mediump float;
#endif

// Yinyang GLSL shader by vvixi

uniform vec2 u_resolution;
uniform float u_time;

void main(){
    vec2 st = gl_FragCoord.xy / u_resolution.xy;
    vec3 color = vec3(0.0);

    vec2 pos = vec2(0.5) - st;

    float rad = length(pos) * 2.0;
    float ang = atan(pos.y, pos.x);

    float f = abs(cos(rad - u_time - ang));
	  color = vec3(0.8 - (0.3, 0.1, f));
   
    gl_FragColor = vec4(color, 1.0);
}
