<template>
  <div class="accordioncontainer">
    <fwb-accordion flush>
    <fwb-accordion-panel>
      <fwb-accordion-header> Front-end skills</fwb-accordion-header>
      <fwb-accordion-content>
        <div>
          <ul>
            <li>Html5</li>
            <li>Css3</li>
            <li>Javascript</li>
            <li>jQuery</li>
            <li>Responsive Design</li>
            <li>React</li>
            <li>Bootstrap</li>
            <li>Vue3 Framework</li>
            <li>Css Processors - TailwindCSS & Bulma</li>
          </ul>
        </div>
      </fwb-accordion-content>
    </fwb-accordion-panel>
    <fwb-accordion-panel>
      <fwb-accordion-header> Back-end skills </fwb-accordion-header>
      <fwb-accordion-content>
        <div>
          <ul>
            <li>Api & RESTful API</li>
            <li>Node</li>
            <li>Express</li>
            <li>Model View Controller (MVC)</li>
            <li>Progressive Web Applications (PWA)</li>
          </ul>
        </div>
      </fwb-accordion-content>
    </fwb-accordion-panel>
    <fwb-accordion-panel>
      <fwb-accordion-header> Database skills </fwb-accordion-header>
      <fwb-accordion-content>
        <ul>
          <li>mySql</li>
          <li>noSql</li>
          <li>Sequelize</li>
          <li>MongoDB</li>
          <li>Mongoose</li>
          <li>graphQL</li>
          <li>AWS Amplify</li>
        </ul>
      </fwb-accordion-content>
    </fwb-accordion-panel>
    <fwb-accordion-panel>
      <fwb-accordion-header> Soft skills </fwb-accordion-header>
      <fwb-accordion-content>
        <ul>
          <li>Strong Communication Skills</li>
          <li>Management Skills</li>
          <li>Creating & evaluating S.O.Ps </li>
          <li>Time Management</li>
          <li>Ability to research and absorb Product Knowledge</li>
          <li>Sales Techniques- Qualifying, Soft/Hard sale, hitting KPI's, creating targets, inventory & liquidation</li>
          <li>Goal-oriented</li>
          <li>Perseverance</li>
          <li>Critical Thinking, adaptability & problem solving</li>
          <li>Attention to detail</li>
          <li>"Big Picture" thinking and planning</li>
          <li>Creativity</li>
        </ul>
      </fwb-accordion-content>
    </fwb-accordion-panel>
  </fwb-accordion>
</div>
</template>

<script setup>
import {
FwbAccordion,
FwbAccordionContent,
FwbAccordionHeader,
FwbAccordionPanel
} from 'flowbite-vue'
</script>

<style scoped>

.accordioncontainer{
margin-top: 2em;

}

.fwb-accordion-content{
border-left: solid rgb(227, 160, 8);
border-bottom: solid rgb(227, 160, 8)
}

button {
background: yellow;
}


</style>
