<template>
  <div class="repoListSection">
    <div class="repoTableHeader">
      <p>Repository Name</p>
      <p>Visibility</p>
      <p>Language</p>
    </div>
    <RouterLink
      v-for="repo in visibleRepos"
      :key="repo.id"
      :to="`/repodetails/${repo.name}`">
      <article class="repoListCont">
        <div>
          <p class="repoName">{{ repo.name }}</p>
          <p>{{ repo.visibility }}</p>
          <p>{{ repo.language === null ? "None" : repo.language }}</p>
          <p class="detailsDot">...</p>
        </div>
      </article>
    </RouterLink>
    <div class="btnsCont">
      <span @click="prevPageHandler">Prev</span>
      <p>
        <span
          v-for="page in pages"
          :key="page"
          @click="setCurrentPage(page)"
          :class="{ active: currentPage === page }"
          >{{ page }} |
        </span>
      </p>
      <span @click="nextPageHandler">Next</span>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { RouterLink } from "vue-router";

export default {
  name: "Repoo",
  data() {
    return {
      repos: [],
      reposPerPage: 10,
      currentPage: 1,
    };
  },
  computed: {
    numOfTotalPages() {
      return Math.ceil(this.repos.length / this.reposPerPage);
    },
    pages() {
      return [...Array(this.numOfTotalPages + 1).keys()].slice(1);
    },
    indexOfLastRepo() {
      return this.currentPage * this.reposPerPage;
    },
    indexOfFirstRepo() {
      return this.indexOfLastRepo - this.reposPerPage;
    },
    visibleRepos() {
      return this.repos.slice(this.indexOfFirstRepo, this.indexOfLastRepo);
    },
  },
  methods: {
    fetchRepos() {
      axios
        .get("https://api.github.com/users/RoleyJes/repos")
        .then((res) => (this.repos = res.data));
    },
    prevPageHandler() {
      if (this.currentPage !== 1) this.currentPage -= 1;
    },
    nextPageHandler() {
      if (this.currentPage !== this.numOfTotalPages) this.currentPage += 1;
    },
    setCurrentPage(page) {
      this.currentPage = page;
    },
  },
  mounted() {
    this.fetchRepos();
  },
};
</script>

<style scoped>
/* Import your styles from App.css or Rep.css or write them here */
.repoListSection {
  background: linear-gradient(
    198deg,
    rgba(221, 153, 0, 0.04) 87.85% rgba(39, 92, 13, 0.1) 6.77%
  );
  padding: 4rem 2rem;
}

.repoTableHeader {
  margin-block-end: 1rem;
  border-bottom: 1px solid rgb(185, 181, 187);
  padding-block-end: 0.5rem;
}

.repoTableHeader p {
  font-weight: 600;
  font-size: 0.875rem;
}

.repoListCont > div,
.repoTableHeader {
  display: grid;
  grid-template-columns: 5fr 3fr 3fr 1fr;
  max-width: 70rem;
  margin-inline: auto;
  padding-block: 0.5rem;
}

.repoName {
  font-weight: 500;
}
.detailsDot {
  place-self: end;
}

.btnsCont {
  margin-block-start: 2rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  place-content: center;
}

.btnsCont span,
.btnsCont p {
  cursor: pointer;
}

.active {
  color: #275c0d;
  font-weight: 700;
}
</style>
