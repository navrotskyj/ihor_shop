<template>
  <div class="page-container container">
    <div class="split-layout">
      <div class="info">
        <h1>Contact Us</h1>
        <p>We are here to help you.</p>
        
        <div class="contact-item">
          <h3>Address</h3>
          <p>123 Golden Street<br>New York, NY 10001</p>
        </div>
        
        <div class="contact-item">
          <h3>Email</h3>
          <p>support@goldenrewards.us</p>
        </div>
        
        <div class="contact-item">
          <h3>Phone</h3>
          <p>+1 (555) 123-4567</p>
        </div>
      </div>
      <div class="map">
        <!-- Map Placeholder -->
        <div class="map-placeholder">Map unavailable</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.page-container {
  padding: 4rem 1rem;
}

.split-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
}

@media (max-width: 768px) {
  .split-layout {
    grid-template-columns: 1fr;
  }
}

h1 {
  color: var(--primary-color);
  font-size: 3rem;
  margin-bottom: 1rem;
}

.contact-item {
  margin-top: 2rem;
}

.contact-item h3 {
  color: #fff;
  margin-bottom: 0.5rem;
}

.contact-item p {
  color: var(--text-muted);
}

.map-placeholder {
  width: 100%;
  height: 400px;
  background: #111;
  border: 1px solid #222;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #444;
}
</style>
