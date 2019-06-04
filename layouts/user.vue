<template>
  <b-container fluid>
    <b-row class="justify-content-md-center">
      <b-col cols="12" md="10">
        <nuxt/>
      </b-col>
    </b-row>
    <div class="wave mt-5"></div>
    <footer id="footer">
      <center>Bravado 2019</center>
      <span class="credit">
        <div>
          Icons made by
          <a
            href="https://www.flaticon.com/authors/popcorns-arts"
            title="Icon Pond"
          >Icon Pond</a> from
          <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by
          <a
            href="http://creativecommons.org/licenses/by/3.0/"
            title="Creative Commons BY 3.0"
            target="_blank"
          >CC 3.0 BY</a>
        </div>
      </span>
    </footer>
  </b-container>
</template>

<style>
span.credit {
  text-align: center;
  color: white;
}
body {
  background: #d9e9e9;
}
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

#footer {
  background: #7dbc9f;
  color: white;
  padding: 1em;
}
#features .card {
  border-radius: 50%;
  text-align: center;
  padding: 0 5px 10px 5px;
}

.wave {
  position: relative;
}
.wave::before {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  background-repeat: repeat;
  height: 10px;
  background-size: 20px 20px;
  background-image: radial-gradient(
    circle at 10px -5px,
    transparent 12px,
    #7dbc9f 13px
  );
}
</style>
