import { defineStore } from 'pinia';

type DialogNameType = 'loading' | 'failure' | 'confirm' | 'alert';
type DialogData = Record<string, unknown>;

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
    failure: {
      visible: false,
      data: {
        error: {},
      },
    },
    confirm: {
      visible: false,
      data: {
        title: '',
        message: '',
        action: () => {},
      },
    },
    alert: {
      visible: false,
      data: {
        title: '',
        message: '',
      },
    },
  }),
  actions: {
    show(name: DialogNameType, data?: DialogData) {
      if (this[name]) {
        this[name].visible = true;
        this[name].data = data;
      }
    },
    hide(name: DialogNameType) {
      if (this[name]) {
        this[name].visible = false;
        this[name].data = {};
      }
    },
  },
});
