<template>
  <div>
    <b-container fluid>
      <bravado-navigation></bravado-navigation>
    </b-container>
    <hr>
    <b-card title="Create a new challenge">
      <b-card-text>Please do not create similar challenge :)</b-card-text>

      <b-row>
        <b-col md="6">
          <div class="card-header">Creation form</div>
          <hr>
          <b-form>
            <b-form-group label="Challenge title:" label-for="challenge-title">
              <b-form-input id="challenge-title" required placeholder="Enter a title"></b-form-input>
            </b-form-group>
            <b-form-group label="Choose categories" id="challenge-category">
              <b-form-checkbox-group id="challenge-category">
                <b-form-checkbox value="1">Watching movie/series</b-form-checkbox>
                <b-form-checkbox value="2">Reading book</b-form-checkbox>
                <b-form-checkbox value="4">Playing video game</b-form-checkbox>
                <b-form-checkbox value="5">Cooking</b-form-checkbox>
                <b-form-checkbox value="6">Travelling new places</b-form-checkbox>
                <b-form-checkbox value="7">Learning foreign languages</b-form-checkbox>
                <b-form-checkbox value="8">Learning programming languages</b-form-checkbox>
                <b-form-checkbox value="9">Playing musical instruments</b-form-checkbox>
                <b-form-checkbox value="10">Redesign old stuff</b-form-checkbox>
                <b-form-checkbox value="11">Body building</b-form-checkbox>
                <b-form-checkbox value="12">Taking photographs</b-form-checkbox>
                <b-form-checkbox value="13">Playing musical instruments</b-form-checkbox>
                <b-form-checkbox value="14">Riding bicycle</b-form-checkbox>
                <b-form-checkbox value="15">Paint</b-form-checkbox>
              </b-form-checkbox-group>
            </b-form-group>
            <b-form-group label="Challenge Start Date:" label-for="challenge-startDate">
              <b-form-input id="challenge-startDate" required placeholder="Enter start date"></b-form-input>
            </b-form-group>
            <b-form-group label="Challenge Finish Date:" label-for="challenge-finishDate">
              <b-form-input id="challenge-finishDate" required placeholder="Enter finish date"></b-form-input>
            </b-form-group>
            <b-form-group label="Challenge Goal:" label-for="challenge-goal">
              <b-form-input
                type="number"
                id="challenge-goal"
                required
                placeholder="Enter total assignment number as goal"
              ></b-form-input>
            </b-form-group>

            <b-form-group label="Challenge Description:" label-for="challenge-description">
              <b-form-textarea
                id="challenge-description"
                placeholder="Write something about challenge for example purpose and rules..."
                rows="5"
                max-rows="8"
              ></b-form-textarea>
            </b-form-group>
          </b-form>
        </b-col>
        <b-col md="6">
          <div class="card-header">Design the badge</div>
          <hr>
          <design-badge></design-badge>
        </b-col>
      </b-row>
      <hr>
    </b-card>
  </div>
</template>

<script>
import bravadoNavigation from '~/components/bravadoNavigation.vue'
import designBadge from '~/components/designBadge.vue'
export default {
  layout: 'user',
  components: { bravadoNavigation, designBadge }
}
</script>

<style>
</style>
