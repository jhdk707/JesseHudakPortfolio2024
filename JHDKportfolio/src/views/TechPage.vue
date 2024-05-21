<template>
  <div class="accordion-container">
    <div class="content">
      <div class="title-content">
        <h1>Technologies</h1>
        <p class="welcome-paragraph font-light text-white-600 dark:text-white-400">
          I graduated from a 6-month Cohort through UC Berkeley Extension program in May of 2023. We focused on MERN Stack development with a Javascript basis. I have since started learning other JS-based frameworks, such as 
          <a href="https://nextjs.org/" target="_blank" rel="noopener" class="green-link">Next.js</a>, and 
          <a href="https://vitejs.dev/" target="_blank" rel="noopener" class="green-link">Vite</a> +
          <a href="https://vuejs.org/" target="_blank" rel="noopener" class="green-link">Vue 3</a>. I am studying 
          <a href="https://www.python.org/" target="_blank" rel="noopener" class="green-link">Python</a>, and intend to learn Java/C languages and learn more about software development as well.
        </p>
      </div>
      <div class="header-content">
        <!-- Add any additional header content here -->
      </div>
      <fwb-accordion flush class="skillHeader">
        <fwb-accordion-panel>
          <fwb-accordion-header>Front-end skills</fwb-accordion-header>
          <fwb-accordion-content>
            <ul>
              <li>Html5</li>
              <li>Css3</li>
              <li>Javascript</li>
              <li>jQuery</li>
              <li>Responsive Design</li>
              <li>React</li>
              <li>Vue3 Framework</li>
              <li>Css Processors i.e TailwindCSS & Bulma</li>
              <li>Bootstrap</li>
              <li>Ionic Capacitor - Android & iOS</li>
              <li>Android Studio</li>
            </ul>
          </fwb-accordion-content>
        </fwb-accordion-panel>
        <fwb-accordion-panel>
          <fwb-accordion-header>Back-end skills</fwb-accordion-header>
          <fwb-accordion-content>
            <ul>
              <li>Api & RESTful API</li>
              <li>Node</li>
              <li>Express</li>
              <li>Model View Controller (MVC)</li>
              <li>Progressive Web Applications (PWA)</li>
              <li>AWS Amplify v6</li>
            </ul>
          </fwb-accordion-content>
        </fwb-accordion-panel>
        <fwb-accordion-panel>
          <fwb-accordion-header>Database skills</fwb-accordion-header>
          <fwb-accordion-content>
            <ul>
              <li>mySql</li>
              <li>noSql</li>
              <li>Sequelize</li>
              <li>MongoDB / Atlas</li>
              <li>Mongoose</li>
              <li>graphQL</li>
              <li>AWS DynamoDB</li>
            </ul>
          </fwb-accordion-content>
        </fwb-accordion-panel>
        <fwb-accordion-panel>
          <fwb-accordion-header>Soft skills</fwb-accordion-header>
          <fwb-accordion-content>
            <ul>
              <li>Strong Communication Skills</li>
              <li>Management Skills</li>
              <li>Creating & evaluating S.O.Ps</li>
              <li>Time Management</li>
              <li>Ability to research and absorb Product Knowledge</li>
              <li>Goal-oriented</li>
              <li>Perseverance</li>
              <li>Critical Thinking, adaptability & problem solving</li>
              <li>Attention to detail</li>
              <li>"Big Picture" thinking and planning</li>
              <li>Creativity</li>
              <li>Sales Techniques - Qualifying, Soft/Hard sale, hitting KPI's, creating targets, inventory & liquidation</li>
            </ul>
          </fwb-accordion-content>
        </fwb-accordion-panel>
      </fwb-accordion>
    </div>
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
.accordion-container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow-y: auto;
  background-color: rgba(0, 0, 0, 0.7);
}

.content {
  margin: 5em auto;
  padding: 1em;
  max-width: 1200px;
  width: 90%;
}

.title-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2em;
}

.title-content h1 {
  text-align: center;
  font-size: 3em;
  font-weight: 700;
  margin-bottom: 0.5em;
}

.welcome-paragraph {
  font-size: 1.2em;
  text-align: center;
}

.header-content {
  margin-bottom: 2em;
}

.skillHeader {
  font-size: 18px;
  width: 100%;
  margin: auto;
}

.green-link {
  color: rgb(0, 171, 0);
}

ul {
  list-style-type: circle;
  padding-left: 20px;
}

@media (max-width: 680px) {
  .content {
    margin: 5em 1em;
  }
  .title-content h1 {
    font-size: 3em;
  }
  .welcome-paragraph {
    font-size: 1em;
  }
  .skillHeader {
    font-size: 16px; /* Slightly smaller font size on mobile devices */
  }
  ul {
    padding-left: 10px; /* Reduce padding for list on smaller screens */
  }
}
</style>
