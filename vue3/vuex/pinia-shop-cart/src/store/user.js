import { defineStore } from "pinia";

export const useUserStore = defineStore({
   id: 'user',
   state: () => ({
      name: '吴总优秀',
      isAdmin: true
   })
})