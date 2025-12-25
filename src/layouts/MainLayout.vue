<template>
  <div class="app-layout">
    <header class="header">
      <div class="container header-content">
        <router-link to="/" class="brand">
          <span class="brand-text">IHOR</span>REWARDS
        </router-link>
        <nav class="nav">
          <router-link to="/" class="nav-link">Home</router-link>
          <router-link to="/catalog" class="nav-link">Catalog</router-link>
          <router-link to="/wholesale" class="nav-link">Wholesale</router-link>
          <router-link to="/contacts" class="nav-link">Contacts</router-link>
        </nav>
        <div class="user-actions">
           <!-- <router-link to="/login" class="btn btn-outline">Sign In</router-link> -->
        </div>
      </div>
    </header>

    <main class="main-content">
      <slot />
    </main>

    <footer class="footer">
      <div class="container footer-content">
        <div class="footer-col">
          <h3>IHOR REWARDS</h3>
          <p>Experience the premium standard in wholesale formatting.</p>
        </div>
        <div class="footer-col">
          <h4>Links</h4>
          <router-link to="/">Home</router-link>
          <router-link to="/catalog">Catalog</router-link>
          <router-link to="/contacts">Contacts</router-link>
        </div>
        <div class="footer-col">
          <h4>Legal</h4>
          <router-link to="/privacy-policy">Privacy Policy</router-link>
          <router-link to="/terms">Terms of Service</router-link>
        </div>
      </div>
      <div class="container copyright">
        &copy; 2025 Ihor Rewards. All rights reserved.
      </div>
    </footer>
  </div>
</template>

<style scoped>
.app-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: var(--bg-color);
  color: var(--text-color);
}

.header {
  height: 80px;
  background: var(--header-bg);
  border-bottom: 1px solid var(--border-color);
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 100;
  backdrop-filter: blur(10px);
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.brand {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary-color);
  text-decoration: none;
  letter-spacing: 1px;
}

.brand-text {
  color: var(--text-color);
}

.nav {
  display: flex;
  gap: 2rem;
}

.nav-link {
  color: var(--text-muted);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s;
  text-transform: uppercase;
  font-size: 0.9rem;
  letter-spacing: 0.5px;
}

.nav-link:hover,
.nav-link.router-link-active {
  color: var(--primary-color);
}

.btn-outline {
  border: 1px solid var(--primary-color);
  color: var(--primary-color);
  padding: 0.5rem 1.5rem;
  border-radius: 4px;
  text-decoration: none;
  transition: all 0.3s;
  text-transform: uppercase;
  font-size: 0.8rem;
  letter-spacing: 1px;
}

.btn-outline:hover {
  background: var(--primary-color);
  color: #0f172a;
}

.main-content {
  flex: 1;
}

.footer {
  background: rgba(2, 6, 23, 1); /* Slate 950 */
  padding: 4rem 0 2rem;
  border-top: 1px solid var(--border-color);
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 3rem;
  margin-bottom: 3rem;
}

.footer-col h3 {
  color: var(--primary-color);
  margin-bottom: 1rem;
}

.footer-col h4 {
  color: #fff;
  margin-bottom: 1rem;
  text-transform: uppercase;
  font-size: 0.9rem;
}

.footer-col a {
  display: block;
  color: var(--text-muted);
  text-decoration: none;
  margin-bottom: 0.5rem;
  transition: color 0.3s;
}

.footer-col a:hover {
  color: var(--primary-color);
}

.copyright {
  text-align: center;
  color: var(--text-muted);
  font-size: 0.8rem;
  padding-top: 2rem;
  border-top: 1px solid var(--border-color);
}
</style>
