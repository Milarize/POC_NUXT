<template>
  <div>
    <!-- Header -->
    <header class="bg-primary text-white p-4">
      <div class="container mx-auto">
        <h1 class="text-2xl font-bold">Nuxt 3 Demo</h1>
        <nav class="mt-2">
          <NuxtLink to="/" class="text-white mr-4">หน้าแรก</NuxtLink>
          <NuxtLink to="/products" class="text-white mr-4">สินค้า</NuxtLink>
          <NuxtLink to="/users" class="text-white mr-4">ผู้ใช้</NuxtLink>
          <NuxtLink to="/profile" class="text-white mr-4">โปรไฟล์</NuxtLink>
          <NuxtLink to="/about" class="text-white">เกี่ยวกับ</NuxtLink>
        </nav>
      </div>
    </header>

    <!-- Main Content -->
    <main class="container mx-auto p-4">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="bg-gray-800 text-white p-4 mt-8">
      <div class="container mx-auto text-center">
        <p>&copy; 2024 Nuxt 3 Demo - Router & Layout Testing</p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
// Simple layout without Vuetify for now
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
}

.bg-primary {
  background-color: #1976d2;
}

.bg-gray-800 {
  background-color: #374151;
}

.text-white {
  color: white;
}

.text-2xl {
  font-size: 1.5rem;
}

.font-bold {
  font-weight: bold;
}

.p-4 {
  padding: 1rem;
}

.mt-2 {
  margin-top: 0.5rem;
}

.mt-8 {
  margin-top: 2rem;
}

.mr-4 {
  margin-right: 1rem;
}

.text-center {
  text-align: center;
}
</style> 