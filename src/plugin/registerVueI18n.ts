import { createI18n } from 'vue-i18n';
import zhTW from '@/locale/zh-TW.json';
import enUS from '@/locale/en-US.json';

const messages = {
  'zh-TW': zhTW,
  'en-US': enUS,
};

const i18n = createI18n({
  legacy: false,
  locale: 'zh-TW',
  fallbackLocale: 'zh-TW',
  messages,
});

export default i18n;
