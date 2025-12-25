<template>
  <div class="page-container container">
    <div class="form-wrapper">
      <h1>Wholesale Inquiry</h1>
      <p>Fill out the form below to apply for wholesale access.</p>
      
      <form class="wholesale-form" @submit.prevent>
        <div class="form-group">
          <label>Company Name</label>
          <input type="text" placeholder="Your Company">
        </div>
        <div class="form-group">
          <label>Contact Person</label>
          <input type="text" placeholder="Full Name">
        </div>
        <div class="form-group">
          <label>Email Address</label>
          <input type="email" placeholder="email@company.com">
        </div>
        <div class="form-group">
          <label>Inquiry Details</label>
          <textarea rows="5" placeholder="Tell us about your needs"></textarea>
        </div>
        <button class="btn btn-primary">Submit Inquiry</button>
      </form>
    </div>
  </div>
</template>

<style scoped>
.page-container {
  padding: 4rem 1rem;
  display: flex;
  justify-content: center;
}

.form-wrapper {
  width: 100%;
  max-width: 600px;
}

h1 {
  color: var(--primary-color);
  margin-bottom: 0.5rem;
}

p {
  color: var(--text-muted);
  margin-bottom: 2rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

input, textarea {
  width: 100%;
  background: rgba(15, 23, 42, 0.8);
  border: 1px solid var(--border-color);
  padding: 1rem;
  color: #fff;
  border-radius: 4px;
  font-family: inherit;
}

input:focus, textarea:focus {
  outline: none;
  border-color: var(--primary-color);
}

.btn-primary {
  width: 100%;
  background: var(--primary-color);
  color: #0f172a;
  border: none;
  padding: 1rem;
  font-weight: 700;
  cursor: pointer;
  text-transform: uppercase;
  margin-top: 1rem;
}
</style>
