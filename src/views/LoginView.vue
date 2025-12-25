<template>
  <div class="page-container">
    <div class="auth-card">
      <div class="tabs">
        <div class="tab" :class="{ active: isLogin }" @click="isLogin = true">Login</div>
        <div class="tab" :class="{ active: !isLogin }" @click="isLogin = false">Register</div>
      </div>
      
      <div class="auth-content">
        <h2 v-if="isLogin">Welcome Back</h2>
        <h2 v-else>Join Golden Rewards</h2>
        
        <form @submit.prevent>
          <div class="form-group" v-if="!isLogin">
             <input type="text" placeholder="Full Name">
          </div>
          <div class="form-group">
             <input type="email" placeholder="Email Address">
          </div>
          <div class="form-group">
             <input type="password" placeholder="Password">
          </div>
          <button class="btn btn-full">{{ isLogin ? 'Sign In' : 'Create Account' }}</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const isLogin = ref(true);
</script>

<style scoped>
.page-container {
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: radial-gradient(circle at center, #1a1a1a 0%, #000 100%);
}

.auth-card {
  width: 100%;
  max-width: 400px;
  background: #0a0a0a;
  border: 1px solid #222;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0,0,0,0.5);
}

.tabs {
  display: flex;
  border-bottom: 1px solid #222;
}

.tab {
  flex: 1;
  text-align: center;
  padding: 1rem;
  cursor: pointer;
  color: var(--text-muted);
  transition: all 0.3s;
}

.tab.active {
  color: var(--primary-color);
  background: #111;
  border-bottom: 2px solid var(--primary-color);
}

.auth-content {
  padding: 2rem;
}

h2 {
  text-align: center;
  margin-bottom: 2rem;
  color: #fff;
}

.form-group {
  margin-bottom: 1rem;
}

input {
  width: 100%;
  padding: 1rem;
  background: #111;
  border: 1px solid #333;
  color: #fff;
  border-radius: 4px;
}

input:focus {
  outline: none;
  border-color: var(--primary-color);
}

.btn-full {
  width: 100%;
  padding: 1rem;
  background: var(--primary-color);
  border: none;
  font-weight: 700;
  text-transform: uppercase;
  margin-top: 1rem;
  cursor: pointer;
}
</style>
