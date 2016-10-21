import echarts from './echarts.min';

export default `
<!DOCTYPE html>\n
<html>
  <head>
    <title>Hello Static World</title>
    <meta http-equiv="content-type" content="text/html; charset=utf-8">
    <style type="text/css">
      html,body {
        height: 100%;
        width: 100%;
        margin: 0;
        padding: 0;
        overflow: hidden;
      }
      #main {
        height: 100%;
        background: red;
      }
    </style>
    <script>
      ${echarts}
    </script>
  </head>
  
  <body>
    <div id="main" ></div>
  <body>
<html>
`