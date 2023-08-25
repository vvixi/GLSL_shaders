{
  vec2 st = gl_FragCoord.xy/u_resolution.xy;
  st.x *= u_resolution.x/u_resolution.y;
  vec3 color = vec3(0.0);
  float dis = 0.0;

  // Remap the space to -1. to 1.
  st = fract(st * 2. / .1);

  // Make the distance field
  dis = length(max(cos(st/.1) - .1,.1));
  
  // Visualize the distance field
  gl_FragColor = vec4(vec3(fract(dis * 51.0 - u_time)),1.);
}
