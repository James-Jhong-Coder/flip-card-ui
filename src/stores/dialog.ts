import { defineStore } from 'pinia';

interface DialogState {
  [key: string]: {
    visible: boolean;
    data?: any;
  };
}

export const useDialogStore = defineStore('dialog', {
  state: (): DialogState => ({
    loading: {
      visible: false,
    },
  }),
  actions: {
    show(name: keyof DialogState, data?: any) {
      if (this[name]) {
        this[name].visible = true;
        this[name].data = data;
      }
    },
    hide(name: keyof DialogState) {
      if (this[name]) {
        this[name].visible = false;
      }
    },
  },
});
