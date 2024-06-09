<template>
  <div class="detailsCont">
    <div class="repoDetailsSection">
      <section>
        <h1>{{ repoDetails.name }}</h1>
        <p>
          <span class="repoDetailTitle">Full name:</span>
          {{ repoDetails.full_name }}
        </p>
        <p>
          <span class="repoDetailTitle">Visibility:</span>
          {{ repoDetails.visibility }}
        </p>
        <p>
          <span class="repoDetailTitle"> Main Language:</span>
          {{ repoDetails.language === null ? "None" : repoDetails.language }}
        </p>
        <p>
          <span class="repoDetailTitle"> License:</span>
          {{ repoDetails.license === null ? "None" : repoDetails.license }}
        </p>
        <p>
          <span class="repoDetailTitle">Default branch:</span>
          {{ repoDetails.default_branch }}
        </p>
        <p>
          <span class="repoDetailTitle">Date created:</span>
          {{ repoDetails.created_at }}
        </p>
        <p>
          <span class="repoDetailTitle">Date pushed:</span>
          {{ repoDetails.pushed_at }}
        </p>
        <p>
          <span class="repoDetailTitle">Date updated:</span>
          {{ repoDetails.updated_at }}
        </p>
        <p>
          <span class="repoDetailTitle">Open issues:</span>
          {{ repoDetails.open_issues }}
        </p>
        <p>
          <span class="repoDetailTitle">HTML url:</span>
          {{ repoDetails.html_url }}
        </p>
        <p>
          <span class="repoDetailTitle">Stars:</span>
          {{ repoDetails.stargazers_count }}
        </p>
        <p>
          <span class="repoDetailTitle">Watch:</span> {{ repoDetails.watchers }}
        </p>
        <p>
          <span class="repoDetailTitle">Forks:</span> {{ repoDetails.forks }}
        </p>

        <!-- Button to view repo on github -->
        <div class="buttondiv">
          <button class="viewBtn">
            <a
              :href="`https://github.com/${repoDetails.full_name}`"
              target="_blank"
              rel="noreferrer"
              class="">
              View on Github
            </a>
          </button>
        </div>
      </section>
    </div>
    <Footer />
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import Footer from "../components/Footer.vue";

export default {
  name: "RepoDetails",
  components: {
    Footer,
  },
  setup() {
    const route = useRoute();
    const repoDetails = ref({});

    onMounted(() => {
      fetch(`https://api.github.com/repos/RoleyJes/${route.params.id}`)
        .then((response) => response.json())
        .then((data) => {
          repoDetails.value = data;
        });
    });

    return {
      repoDetails,
    };
  },
};
</script>

<style scoped>
/* Import your styles from App.css or write them here */
.repoDetailsSection {
  background: rgba(39, 92, 13, 0.1);
}

.repoDetailsSection > section {
  max-width: 70rem;
  margin-inline: auto;
  padding-block: 3rem 2rem;
  padding-inline: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.repoDetailTitle {
  font-size: 0.875rem;
  font-weight: 500;
}

.viewBtn {
  border: none;
  padding: 1rem 1.5rem;
  background-color: #275c0d;
  color: white;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  font-family: inherit;
  font-size: 1rem;
}
</style>
