<template>
  <div>
    <slider></slider>
    <wave-splitter color="#d9e9e9"></wave-splitter>
    <b-container id="promotion">
      <b-row>
        <b-col id="popularChallanges" md="5">
          <b-card border-variant="light" header="Popular Challanges" class="text-center">
            <b-dropdown variant="outline-dark">
              <template slot="button-content">
                Choose challange
                <strong>categories</strong>
              </template>
              <b-dropdown-item href="#">An item</b-dropdown-item>
              <b-dropdown-item href="#">Another item</b-dropdown-item>
            </b-dropdown>
            <hr>
            <b-list-group>
              <b-list-group-item
                href="#some-link"
                v-for="(ob,i) in [0,1,2,3,4,5,6,7,8,9,10]"
                :key="i"
              >
                Reading Challange
                <b-progress :value="100-i*10" :max="100" show-progress animated></b-progress>
              </b-list-group-item>
            </b-list-group>
          </b-card>
        </b-col>
        <b-col id="features" md="7">
          <b-card-group columns>
            <b-card img-src="/icons/svg/009-teamwork.svg" img-alt="Image" img-top>
              <b-card-text>Challange with others</b-card-text>
            </b-card>

            <b-card img-src="/icons/svg/006-target.svg" img-alt="Image" img-top>
              <b-card-text>Follow your progress</b-card-text>
            </b-card>

            <b-card img-src="/icons/svg/022-conversation.svg" img-alt="Image" img-top>
              <b-card-text>Communicate with others</b-card-text>
            </b-card>

            <b-card img-src="/icons/svg/036-employee-2.svg" img-alt="Image" img-top>
              <b-card-text>Follow your progress</b-card-text>
            </b-card>

            <b-card img-src="/icons/svg/021-dossier.svg" img-alt="Image" img-top>
              <b-card-text>Submit assignments for continuity</b-card-text>
            </b-card>

            <b-card img-src="/icons/svg/008-analytics.svg" img-alt="Image" img-top>
              <b-card-text>Get your statistics and stability points</b-card-text>
            </b-card>

            <b-card img-src="/icons/svg/035-protection-1.svg" img-alt="Image" img-top>
              <b-card-text>Verify other's submissions</b-card-text>
            </b-card>

            <b-card img-src="/icons/svg/029-teamwork-2.svg" img-alt="Image" img-top>
              <b-card-text>Look your verified award history</b-card-text>
            </b-card>
            <b-card img-src="/icons/svg/042-winner.svg" img-alt="Image" img-top>
              <b-card-text>Claim your verified awards</b-card-text>
            </b-card>
          </b-card-group>
        </b-col>
      </b-row>
    </b-container>
    <div class="wave mt-5"></div>
    <footer id="footer">
      <center>Bravado 2019</center>
    </footer>
  </div>
</template>

<script>
import slider from '~/components/slider.vue'
import waveSplitter from '~/components/waveSplitter.vue'
export default {
  components: { slider, waveSplitter }
}
</script>

<style>
body {
  background: #d9e9e9;
}
#promotion {
  margin-top: 1em;
  z-index: 1;
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





