<template>
  <div className="section404">
    <figure className="errImgCont">
      <img src="../assets/error404.jpg" alt="404" className="errorimg" />
    </figure>
    <h2 className="text404">404</h2>
    <p className="wahala">Wahala Wahala Wahala!!!</p>
    <p className="address">You've entered a wrong address</p>
    <RouterLink to="/">
      <button className="viewBtn">Show Me Road</button>
    </RouterLink>
  </div>
</template>

<script>
import { RouterLink } from "vue-router";

export default { name: "ErrorPage" };
</script>

<style scoped>
.section404 {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
}

.errImgCont {
  width: 20rem;
  height: 20rem;
}

.errImgCont img {
  width: 100%;
  height: 100%;
}

.text404 {
  font-size: 3rem;
  color: rgba(209, 75, 41, 0.959);
}

.wahala {
  font-size: 1.5rem;
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
