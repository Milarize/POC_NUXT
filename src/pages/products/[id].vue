<template>
  <div>
    <v-row v-if="product">
      <v-col cols="12" md="6">
        <v-card>
          <v-img
            :src="product.image"
            height="400"
            cover
          />
        </v-card>
      </v-col>

      <v-col cols="12" md="6">
        <v-card>
          <v-card-title class="text-h4">
            {{ product.name }}
          </v-card-title>
          <v-card-text>
            <p class="text-body-1 mb-4">{{ product.description }}</p>
            
            <v-chip
              color="primary"
              size="large"
              class="mb-4"
            >
              ฿{{ product.price }}
            </v-chip>

            <v-divider class="my-4" />

            <v-list>
              <v-list-item prepend-icon="mdi-package-variant">
                <v-list-item-title>รหัสสินค้า: {{ product.id }}</v-list-item-title>
              </v-list-item>
              <v-list-item prepend-icon="mdi-tag">
                <v-list-item-title>หมวดหมู่: {{ product.category }}</v-list-item-title>
              </v-list-item>
              <v-list-item prepend-icon="mdi-star">
                <v-list-item-title>คะแนน: {{ product.rating }}/5</v-list-item-title>
              </v-list-item>
            </v-list>

            <v-divider class="my-4" />

            <v-row>
              <v-col cols="6">
                <v-btn
                  color="primary"
                  block
                  size="large"
                  prepend-icon="mdi-cart"
                >
                  เพิ่มลงตะกร้า
                </v-btn>
              </v-col>
              <v-col cols="6">
                <v-btn
                  color="secondary"
                  variant="outlined"
                  block
                  size="large"
                  prepend-icon="mdi-heart"
                >
                  เพิ่มรายการโปรด
                </v-btn>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row v-else>
      <v-col cols="12">
        <v-card>
          <v-card-title class="text-center">
            <v-icon size="large" color="error" class="mr-2">
              mdi-alert-circle
            </v-icon>
            ไม่พบสินค้า
          </v-card-title>
          <v-card-text class="text-center">
            <p>สินค้าที่คุณค้นหาไม่พบ</p>
            <v-btn
              color="primary"
              :to="'/products'"
              class="mt-4"
            >
              กลับไปหน้าสินค้า
            </v-btn>
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
  category: string
  rating: number
}

// ใช้ route params
const route = useRoute()
const productId = route.params.id

// Mock data
const products = ref<Product[]>([
  {
    id: 1,
    name: 'iPhone 15 Pro',
    description: 'สมาร์ทโฟนรุ่นใหม่จาก Apple ที่มาพร้อมกับชิป A17 Pro และกล้องระบบ 3 ตัว พร้อมเทคโนโลยี ProRAW และ ProRes video recording',
    price: 45000,
    image: 'https://picsum.photos/400/400?random=1',
    category: 'สมาร์ทโฟน',
    rating: 4.8
  },
  {
    id: 2,
    name: 'MacBook Air M2',
    description: 'แล็ปท็อปประสิทธิภาพสูงด้วยชิป M2 ที่ให้ความเร็วและประสิทธิภาพที่ยอดเยี่ยม พร้อมแบตเตอรี่ที่ใช้งานได้นานถึง 18 ชั่วโมง',
    price: 35000,
    image: 'https://picsum.photos/400/400?random=2',
    category: 'แล็ปท็อป',
    rating: 4.9
  },
  {
    id: 3,
    name: 'AirPods Pro',
    description: 'หูฟังไร้สายคุณภาพสูงพร้อม Active Noise Cancellation และ Spatial Audio ที่ให้ประสบการณ์การฟังเพลงที่ยอดเยี่ยม',
    price: 8500,
    image: 'https://picsum.photos/400/400?random=3',
    category: 'หูฟัง',
    rating: 4.7
  },
  {
    id: 4,
    name: 'iPad Air',
    description: 'แท็บเล็ตสำหรับงานและความบันเทิงที่มาพร้อมกับชิป M1 และหน้าจอ Liquid Retina ที่สวยงาม',
    price: 25000,
    image: 'https://picsum.photos/400/400?random=4',
    category: 'แท็บเล็ต',
    rating: 4.6
  }
])

// หาสินค้าตาม ID
const product = computed(() => {
  return products.value.find(p => p.id === Number(productId))
})

// ใช้ router
const router = useRouter()

const goBack = () => {
  router.back()
}

const goToProducts = () => {
  router.push('/products')
}
</script> 