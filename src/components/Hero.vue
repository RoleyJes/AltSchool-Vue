<template>
  <section className="hero_section_cont">
    <div className="hero_section">
      <h1 className="hero_header">
        You made it here! Welcome to Jessica Imoesemi's GitHub repositories
        display.
      </h1>
      <p className="hero_text1">
        A little bit about Jessica? Well, She's a front-end engineer who builds
        beautiful and functional web applications. She writes HTML, CSS and
        Javascript, and she's about to add React to that list 😉
      </p>
      <p className="hero_text2">Have fun exploring!</p>
    </div>
  </section>
</template>

<style scoped>
.hero_section_cont {
  background: linear-gradient(
    198deg,
    rgba(39, 92, 13, 0.1) 6.77%,
    rgba(221, 153, 0, 0.04) 87.85%
  );

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6rem 2rem;
}

.hero_section {
  display: flex;
  justify-content: center;
  flex-direction: column;
  row-gap: 2rem;
  text-align: center;
  max-width: 50rem;
}

.hero_header {
  font-size: 3rem;
  font-weight: 600;
  line-height: 3.9rem;
  letter-spacing: -0.08rem;
}

.hero_text1 {
  font-size: 1rem;
}

.hero_text2 {
  font-size: 1rem;
}
</style>
