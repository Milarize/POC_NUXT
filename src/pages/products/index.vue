<template>
  <div>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title class="d-flex justify-space-between align-center">
             สินค้าทั้งหมด
            <v-btn
              color="primary"
              prepend-icon="mdi-plus"
              @click="addProduct"
            >
              เพิ่มสินค้า
            </v-btn>
          </v-card-title>
          <v-card-text>
            <v-row>
              <v-col
                v-for="product in products"
                :key="product.id"
                cols="12"
                sm="6"
                md="4"
                lg="3"
              >
                <v-card>
                  <v-img
                    :src="product.image"
                    height="200"
                    cover
                  />
                  <v-card-title>{{ product.name }}</v-card-title>
                  <v-card-text>
                    <p>{{ product.description }}</p>
                    <v-chip color="primary" class="mt-2">
                      ฿{{ product.price }}
                    </v-chip>
                  </v-card-text>
                  <v-card-actions>
                    <v-btn
                      color="primary"
                      variant="outlined"
                      :to="`/products/${product.id}`"
                    >
                      ดูรายละเอียด
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default'
})

interface Product {
  id: number
  name: string
  description: string
  price: number
  image: string
}

const products = ref<Product[]>([
  {
    id: 1,
    name: 'iPhone 15 Pro',
    description: 'สมาร์ทโฟนรุ่นใหม่จาก Apple',
    price: 45000,
    image: 'https://picsum.photos/300/200?random=1'
  },
  {
    id: 2,
    name: 'MacBook Air M2',
    description: 'แล็ปท็อปประสิทธิภาพสูง',
    price: 35000,
    image: 'https://picsum.photos/300/200?random=2'
  },
  {
    id: 3,
    name: 'AirPods Pro',
    description: 'หูฟังไร้สายคุณภาพสูง',
    price: 8500,
    image: 'https://picsum.photos/300/200?random=3'
  },
  {
    id: 4,
    name: 'iPad Air',
    description: 'แท็บเล็ตสำหรับงานและความบันเทิง',
    price: 25000,
    image: 'https://picsum.photos/300/200?random=4'
  }
])

const addProduct = () => {
  console.log('เพิ่มสินค้าใหม่')
}
</script> 