import { defineStore } from "pinia";

export const useAuthStore = defineStore({
  id: "auth",
  state: () => ({
    users: [],
    currentUser: null,
    isLoggedIn: false,
  }),
  persist: true,
  actions: {
    setUser(user) {
      this.currentUser = user;
      this.users = user ? [user] : [];
      this.isLoggedIn = !!user;
    },
    addUser(user) {
      if (!this.users.some((u) => u.id === user.id)) {
        this.users.push(user);
      }
      if (!this.currentUser) {
        this.currentUser = user;
      }
      this.isLoggedIn = true;
    },
    removeUser(user) {
      const index = this.users.findIndex((u) => u.id === user.id);
      if (index !== -1) {
        this.users.splice(index, 1);
      }
      if (this.currentUser?.id === user.id) {
        this.currentUser = this.users[0] ?? null;
      }
      this.isLoggedIn = this.users.length > 0;
    },
    getUsers() {
      return this.users;
    },
  },
});
