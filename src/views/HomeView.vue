<template>
  <div class="home">
    <section class="hero">
      <div class="container hero-content">
        <h1>Exclusive Rewards for <span class="highlight">Golden</span> Partners</h1>
        <p>Unlock premium wholesale pricing and exclusive catalog access.</p>
        <router-link to="/catalog" class="btn btn-primary">View Catalog</router-link>
      </div>
    </section>
  </div>
</template>

<style scoped>
.hero {
  height: 80vh;
  display: flex;
  align-items: center;
  background: radial-gradient(circle at center, #1a1a1a 0%, #000 100%);
  text-align: center;
}

.hero-content h1 {
  font-size: 4rem;
  margin-bottom: 1.5rem;
  line-height: 1.1;
}

.highlight {
  color: var(--primary-color);
}

.hero-content p {
  font-size: 1.25rem;
  color: var(--text-muted);
  max-width: 600px;
  margin: 0 auto 2.5rem;
}

.btn-primary {
  background: var(--primary-color);
  color: #000;
  padding: 1rem 2.5rem;
  font-size: 1.1rem;
  text-decoration: none;
  border-radius: 4px;
  font-weight: 600;
  transition: transform 0.3s, box-shadow 0.3s;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(212, 175, 55, 0.4);
}
</style>
