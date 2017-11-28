import copy from 'rollup-plugin-copy';
import json from 'rollup-plugin-json'

export default {
  name: 'videojsIma',
  input: 'src/ima-plugin.js',
  output: {
    file: 'dist/videojs.ima.max.js',
    format: 'umd'
  },
  external: ['video.js', 'videojs-contrib-ads'],
  globals: {
    'video.js': 'videojs'
  },
  plugins: [
    json(),
    copy({
      "src/css/videojs.ima.dev.css": "dist/videojs.ima.dev.css"
    })
  ]
};
