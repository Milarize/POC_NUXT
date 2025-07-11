<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12" md="6">
          <v-card>
            <v-card-title>ยินดีต้อนรับ</v-card-title>
            <v-card-text>
              <p>นี่คือหน้าแรกของ Nuxt 3 Demo ที่ทดสอบ:</p>
              <v-list>
                <v-list-item>
                  <v-list-item-title>Router Navigation</v-list-item-title>
                </v-list-item>
                <v-list-item>
                  <v-list-item-title>Dynamic Routes</v-list-item-title>
                </v-list-item>
                <v-list-item>
                  <v-list-item-title>NuxtLayout</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="12" md="6">
          <v-card>
            <v-card-title>สถิติ</v-card-title>
            <v-card-text>
              <v-row>
                <v-col cols="6">
                  <v-card color="primary" dark>
                    <v-card-text class="text-center">
                      <div class="text-h4">{{ stats.products }}</div>
                      <div>สินค้า</div>
                    </v-card-text>
                  </v-card>
                </v-col>
                <v-col cols="6">
                  <v-card color="secondary" dark>
                    <v-card-text class="text-center">
                      <div class="text-h4">{{ stats.users }}</div>
                      <div>ผู้ใช้</div>
                    </v-card-text>
                  </v-card>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <v-row class="mt-4">
        <v-col cols="12">
          <v-card>
            <v-card-title>ลิงก์ทดสอบ</v-card-title>
            <v-card-text>
              <v-row>
                <v-col cols="12" sm="6" md="3">
                  <v-btn
                    color="primary"
                    block
                    :to="'/products'"
                  >
                    สินค้าทั้งหมด
                  </v-btn>
                </v-col>
                <v-col cols="12" sm="6" md="3">
                  <v-btn
                    color="secondary"
                    block
                    :to="'/users'"
                  >
                    ผู้ใช้ทั้งหมด
                  </v-btn>
                </v-col>
                <v-col cols="12" sm="6" md="3">
                  <v-btn
                    color="success"
                    block
                    :to="'/profile'"
                  >
                    โปรไฟล์
                  </v-btn>
                </v-col>
                <v-col cols="12" sm="6" md="3">
                  <v-btn
                    color="info"
                    block
                    :to="'/about'"
                  >
                    เกี่ยวกับ
                  </v-btn>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup lang="ts">
// กำหนด layout
definePageMeta({
  layout: 'default'
})

interface Stats {
  products: number
  users: number
}

const stats = ref<Stats>({
  products: 25,
  users: 150
})

// ใช้ router
const router = useRouter()
const _route = useRoute()

// ตัวอย่างการ navigate programmatically
const _goToProducts = () => {
  router.push('/products')
}

const _goToUsers = () => {
  router.push('/users')
}
</script> 