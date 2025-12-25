<script setup>
import { ref, computed } from 'vue';

// Import images
import imgWatch from '../assets/images/gold_watch_1766654955253.png';
import imgCufflinks from '../assets/images/cufflinks_1766654969702.png';
import imgPen from '../assets/images/fountain_pen_1766654984581.png';
import imgSunglasses from '../assets/images/sunglasses_1766654998405.png';

const viewMode = ref('grid'); // 'grid' or 'list'
const sortBy = ref('default');

const items = ref([
  { id: 1, name: 'Royal Gold Watch', price: 1299.00, image: imgWatch },
  { id: 2, name: 'Diamond Studded Cufflinks', price: 450.00, image: imgCufflinks },
  { id: 3, name: 'Golden Fountain Pen', price: 299.50, image: imgPen },
  { id: 4, name: 'Premium Leather Briefcase', price: 850.00, image: null }, // Placeholder fallback
  { id: 5, name: 'Gold-Plated Sunglasses', price: 320.00, image: imgSunglasses },
  { id: 6, name: 'Luxury Card Holder', price: 150.00, image: null },
  { id: 7, name: 'Executive Desk Set', price: 550.00, image: null },
  { id: 8, name: 'Limited Edition Timepiece', price: 2500.00, image: null },
]);

const sortedItems = computed(() => {
  let list = [...items.value];
  if (sortBy.value === 'price-asc') {
    list.sort((a, b) => a.price - b.price);
  } else if (sortBy.value === 'price-desc') {
    list.sort((a, b) => b.price - a.price);
  } else if (sortBy.value === 'name-asc') {
    list.sort((a, b) => a.name.localeCompare(b.name));
  }
  return list;
});
</script>

<template>
  <div class="page-container container">
    <div class="page-header">
      <h1>Our Catalog</h1>
      <p>Browse our premium selection.</p>
    </div>

    <!-- Toolbar -->
    <div class="toolbar">
      <div class="view-options">
        <button 
          class="btn-icon" 
          :class="{ active: viewMode === 'grid' }" 
          @click="viewMode = 'grid'"
          title="Grid View"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
        </button>
        <button 
          class="btn-icon" 
          :class="{ active: viewMode === 'list' }" 
          @click="viewMode = 'list'"
          title="List View"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>
        </button>
      </div>

      <div class="sort-options">
        <label for="sort">Sort By:</label>
        <select id="sort" v-model="sortBy">
          <option value="default">Featured</option>
          <option value="name-asc">Name (A-Z)</option>
          <option value="price-asc">Price (Low to High)</option>
          <option value="price-desc">Price (High to Low)</option>
        </select>
      </div>
    </div>

    <!-- Grid/List Display -->
    <div class="catalog-content" :class="viewMode">
      <div v-for="item in sortedItems" :key="item.id" class="card">
        <div class="card-image" :style="item.image ? { backgroundImage: `url(${item.image})` } : {}"></div>
        <div class="card-body">
          <div class="card-info">
            <h3>{{ item.name }}</h3>
            <p class="price">${{ item.price.toFixed(2) }}</p>
            <p v-if="viewMode === 'list'" class="description">
              Experience the pinnacle of luxury with this exquisitely crafted item, designed for those who appreciate the finer things in life.
            </p>
          </div>
          <button class="btn-action">Add to Cart</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.page-container {
  padding: 4rem 1rem;
}

.page-header {
  text-align: center;
  margin-bottom: 3rem;
}

.page-header h1 {
  font-size: 3rem;
  color: var(--primary-color);
}

/* Toolbar */
.toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding: 1rem;
  background: #111;
  border: 1px solid #222;
  border-radius: 4px;
}

.view-options {
  display: flex;
  gap: 0.5rem;
}

.btn-icon {
  background: none;
  border: 1px solid transparent;
  color: var(--text-muted);
  padding: 0.5rem;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
}

.btn-icon:hover {
  color: #fff;
}

.btn-icon.active {
  color: var(--primary-color);
  background: #222;
  border-color: #333;
}

.sort-options {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.sort-options label {
  color: var(--text-muted);
  font-size: 0.9rem;
}

select {
  background: #000;
  color: #fff;
  border: 1px solid #333;
  padding: 0.5rem 2rem 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
}

select:focus {
  outline: none;
  border-color: var(--primary-color);
}

/* Catalog Display */
.catalog-content.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
}

.catalog-content.list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

/* Grid View Card Styles */
.grid .card {
  background: #111;
  border: 1px solid #222;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s, border-color 0.3s;
  display: flex;
  flex-direction: column;
}

.grid .card:hover {
  transform: translateY(-5px);
  border-color: var(--primary-color);
}

.grid .card-image {
  height: 250px;
  background-color: #222;
  background-size: cover;
  background-position: center;
  width: 100%;
}

.grid .card-body {
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.grid .card-info {
  margin-bottom: 1rem;
}

/* List View Card Styles */
.list .card {
  display: flex;
  background: #111;
  border: 1px solid #222;
  border-radius: 8px;
  overflow: hidden;
  transition: border-color 0.3s;
}

.list .card:hover {
  border-color: var(--primary-color);
}

.list .card-image {
  width: 250px;
  min-width: 250px;
  background-color: #222;
  background-size: cover;
  background-position: center;
}

.list .card-body {
  padding: 2rem;
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.list .card-info {
  flex: 1;
  padding-right: 2rem;
}

.list .description {
  margin-top: 1rem;
  color: var(--text-muted);
  font-size: 0.95rem;
}

/* Typography & Common */
h3 {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: #fff;
}

.price {
  color: var(--primary-color);
  font-weight: 700;
  font-size: 1.1rem;
}

.btn-action {
  background: transparent;
  border: 1px solid var(--primary-color);
  color: var(--primary-color);
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-weight: 600;
  transition: all 0.3s;
}

.btn-action:hover {
  background: var(--primary-color);
  color: #000;
}

@media (max-width: 768px) {
  .list .card {
    flex-direction: column;
  }
  
  .list .card-image {
    width: 100%;
    height: 200px;
  }
  
  .list .card-body {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .list .card-info {
    padding-right: 0;
    margin-bottom: 1rem;
  }
  
  .toolbar {
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
  }
}
</style>
