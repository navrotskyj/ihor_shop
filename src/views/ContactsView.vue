<template>
  <div class="page-container container">
    <div class="split-layout">
      <div class="info">
        <h1>Contact Us</h1>
        <p>We are here to help you.</p>
        
        <div class="contact-item">
          <h3>Address</h3>
          <p>7901 4TH ST N STE 300<br>ST. PETERSBURG, FL 33702</p>
        </div>
        
        <div class="contact-item">
          <h3>Email</h3>
          <p>support@gmail.us</p>
        </div>
        
        <div class="contact-item">
          <h3>Phone</h3>
          <p>+1 (555) 123-4567</p>
        </div>
      </div>
      <div class="map">
        <!-- Map Image -->
        <div class="map-container">
          <iframe width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=7901%204TH%20ST%20N%20STE%20300%20ST.%20PETERSBURG,%20FL%2033702+()&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.mapsdirections.info/de/evolkerung-auf-einer-karte-berechnen/">Demografie Karte Deutschland</a></iframe>
        </div>
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

.map-container {
  width: 100%;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0,0,0,0.5);
  line-height: 0;
}

.map-image {
  width: 100%;
  height: auto;
  display: block;
}
</style>
