<template>
  <v-app>
    <v-main>
      <v-container>
        <v-row>
          <v-col cols="12">
            <v-card class="mx-auto" max-width="600">
              <v-card-title class="text-h4 text-center pa-4">
                👤 Profile Page
              </v-card-title>
              
              <v-card-text>
                <v-alert
                  type="info"
                  title="หน้า Profile"
                  text="นี่คือหน้า Profile ที่สร้างขึ้นใหม่"
                  class="mb-4"
                />
                
                <v-divider class="my-4"/>
                
                <v-row>
                  <v-col cols="12">
                    <v-text-field
                      v-model="user.name"
                      label="ชื่อ"
                      variant="outlined"
                      class="mb-3"
                    />
                  </v-col>
                  
                  <v-col cols="12">
                    <v-text-field
                      v-model="user.email"
                      label="อีเมล"
                      variant="outlined"
                      type="email"
                      class="mb-3"
                    />
                  </v-col>
                  
                  <v-col cols="12">
                    <v-textarea
                      v-model="user.bio"
                      label="ประวัติย่อ"
                      variant="outlined"
                      rows="3"
                      class="mb-3"
                    />
                  </v-col>
                </v-row>
                
                <v-row>
                  <v-col cols="6">
                    <v-btn
                      color="primary"
                      block
                      @click="saveProfile"
                    >
                      บันทึก
                    </v-btn>
                  </v-col>
                  
                  <v-col cols="6">
                    <v-btn
                      color="secondary"
                      variant="outlined"
                      block
                      @click="resetProfile"
                    >
                      รีเซ็ต
                    </v-btn>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
interface User {
  name: string
  email: string
  bio: string
}

const user = ref<User>({
  name: 'ผู้ใช้ตัวอย่าง',
  email: 'user@example.com',
  bio: 'นี่คือประวัติย่อของผู้ใช้'
})

const saveProfile = (): void => {
  // TODO: Implement save logic
  console.log('บันทึกข้อมูล:', user.value)
}

const resetProfile = (): void => {
  user.value = {
    name: 'ผู้ใช้ตัวอย่าง',
    email: 'user@example.com',
    bio: 'นี่คือประวัติย่อของผู้ใช้'
  }
}
</script>