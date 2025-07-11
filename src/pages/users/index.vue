<template>
  <div>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title class="d-flex justify-space-between align-center">
            ผู้ใช้ทั้งหมด
            <v-btn
              color="primary"
              prepend-icon="mdi-account-plus"
              @click="addUser"
            >
              เพิ่มผู้ใช้
            </v-btn>
          </v-card-title>
          <v-card-text>
            <v-data-table
              :headers="headers"
              :items="users"
              :items-per-page="5"
              class="elevation-1"
            >
              <template v-slot:item.avatar="{ item }">
                <v-avatar size="40">
                  <v-img :src="item.avatar" />
                </v-avatar>
              </template>

              <template v-slot:item.actions="{ item }">
                <v-btn
                  icon
                  size="small"
                  color="primary"
                  :to="`/users/${item.id}`"
                >
                  <v-icon>mdi-eye</v-icon>
                </v-btn>
                <v-btn
                  icon
                  size="small"
                  color="secondary"
                  @click="editUser(item)"
                >
                  <v-icon>mdi-pencil</v-icon>
                </v-btn>
                <v-btn
                  icon
                  size="small"
                  color="error"
                  @click="deleteUser(item)"
                >
                  <v-icon>mdi-delete</v-icon>
                </v-btn>
              </template>
            </v-data-table>
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

interface User {
  id: number
  name: string
  email: string
  role: string
  avatar: string
  status: string
}

const headers = [
  { title: 'รูปภาพ', key: 'avatar', sortable: false },
  { title: 'ชื่อ', key: 'name', sortable: true },
  { title: 'อีเมล', key: 'email', sortable: true },
  { title: 'บทบาท', key: 'role', sortable: true },
  { title: 'สถานะ', key: 'status', sortable: true },
  { title: 'การจัดการ', key: 'actions', sortable: false }
]

const users = ref<User[]>([
  {
    id: 1,
    name: 'สมชาย ใจดี',
    email: 'somchai@example.com',
    role: 'ผู้ดูแลระบบ',
    avatar: 'https://picsum.photos/100/100?random=1',
    status: 'ออนไลน์'
  },
  {
    id: 2,
    name: 'สมหญิง รักดี',
    email: 'somying@example.com',
    role: 'ผู้ใช้',
    avatar: 'https://picsum.photos/100/100?random=2',
    status: 'ออฟไลน์'
  },
  {
    id: 3,
    name: 'สมศักดิ์ เก่งดี',
    email: 'somsak@example.com',
    role: 'ผู้จัดการ',
    avatar: 'https://picsum.photos/100/100?random=3',
    status: 'ออนไลน์'
  },
  {
    id: 4,
    name: 'สมปอง น่ารัก',
    email: 'sompong@example.com',
    role: 'ผู้ใช้',
    avatar: 'https://picsum.photos/100/100?random=4',
    status: 'ออฟไลน์'
  }
])

const addUser = () => {
  // TODO: Implement add user logic
  console.log('เพิ่มผู้ใช้ใหม่')
}

const editUser = (user: User) => {
  // TODO: Implement edit user logic
  console.log('แก้ไขผู้ใช้:', user.name)
}

const deleteUser = (user: User) => {
  // TODO: Implement delete user logic
  console.log('ลบผู้ใช้:', user.name)
}
</script> 