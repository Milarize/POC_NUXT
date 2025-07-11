<template>
  <div>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title class="text-h4 text-center">
            ℹ️ เกี่ยวกับโปรเจค
          </v-card-title>
          <v-card-text>
            <v-row>
              <v-col cols="12" md="6">
                <v-card variant="outlined">
                  <v-card-title>🎯 วัตถุประสงค์</v-card-title>
                  <v-card-text>
                    <p>โปรเจคนี้สร้างขึ้นเพื่อทดสอบการใช้งาน:</p>
                    <v-list>
                      <v-list-item prepend-icon="mdi-router">
                        <v-list-item-title>Router Navigation</v-list-item-title>
                        <v-list-item-subtitle>การนำทางระหว่างหน้า</v-list-item-subtitle>
                      </v-list-item>
                      <v-list-item prepend-icon="mdi-format-list-bulleted">
                        <v-list-item-title>Dynamic Routes</v-list-item-title>
                        <v-list-item-subtitle>เส้นทางแบบไดนามิก</v-list-item-subtitle>
                      </v-list-item>
                      <v-list-item prepend-icon="mdi-view-dashboard">
                        <v-list-item-title>NuxtLayout</v-list-item-title>
                        <v-list-item-subtitle>เลย์เอาต์ของแอปพลิเคชัน</v-list-item-subtitle>
                      </v-list-item>
                    </v-list>
                  </v-card-text>
                </v-card>
              </v-col>

              <v-col cols="12" md="6">
                <v-card variant="outlined">
                  <v-card-title>🛠️ เทคโนโลยีที่ใช้</v-card-title>
                  <v-card-text>
                    <v-chip-group>
                      <v-chip color="primary" variant="outlined">Nuxt 3</v-chip>
                      <v-chip color="secondary" variant="outlined">Vue 3</v-chip>
                      <v-chip color="success" variant="outlined">TypeScript</v-chip>
                      <v-chip color="info" variant="outlined">Vuetify 3</v-chip>
                      <v-chip color="warning" variant="outlined">Bun</v-chip>
                    </v-chip-group>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>

            <v-row class="mt-4">
              <v-col cols="12">
                <v-card variant="outlined">
                  <v-card-title>📋 ฟีเจอร์ที่ทดสอบ</v-card-title>
                  <v-card-text>
                    <v-row>
                      <v-col cols="12" sm="6" md="3">
                        <v-card color="primary" dark>
                          <v-card-text class="text-center">
                            <v-icon size="large" class="mb-2">mdi-router</v-icon>
                            <div class="text-h6">Router</div>
                            <div class="text-caption">การนำทาง</div>
                          </v-card-text>
                        </v-card>
                      </v-col>
                      <v-col cols="12" sm="6" md="3">
                        <v-card color="secondary" dark>
                          <v-card-text class="text-center">
                            <v-icon size="large" class="mb-2">mdi-format-list-bulleted</v-icon>
                            <div class="text-h6">Dynamic Routes</div>
                            <div class="text-caption">เส้นทางไดนามิก</div>
                          </v-card-text>
                        </v-card>
                      </v-col>
                      <v-col cols="12" sm="6" md="3">
                        <v-card color="success" dark>
                          <v-card-text class="text-center">
                            <v-icon size="large" class="mb-2">mdi-view-dashboard</v-icon>
                            <div class="text-h6">Layout</div>
                            <div class="text-caption">เลย์เอาต์</div>
                          </v-card-text>
                        </v-card>
                      </v-col>
                      <v-col cols="12" sm="6" md="3">
                        <v-card color="info" dark>
                          <v-card-text class="text-center">
                            <v-icon size="large" class="mb-2">mdi-palette</v-icon>
                            <div class="text-h6">UI Components</div>
                            <div class="text-caption">คอมโพเนนต์</div>
                          </v-card-text>
                        </v-card>
                      </v-col>
                    </v-row>
                  </v-card-text>
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

// ข้อมูลเกี่ยวกับโปรเจค
const projectInfo = {
  name: 'Nuxt 3 Demo',
  version: '1.0.0',
  description: 'โปรเจคทดสอบการใช้งาน Nuxt 3, Router, และ Layout',
  author: 'Developer',
  technologies: ['Nuxt 3', 'Vue 3', 'TypeScript', 'Vuetify 3', 'Bun']
}
</script> 