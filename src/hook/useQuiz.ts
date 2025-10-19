import { useRoute } from 'vue-router';
import { computed } from 'vue';

export const useQuiz = () => {
  const route = useRoute();

  const computedLanguage = computed(() => {
    const _language = route.query.language;
    return (Array.isArray(_language) ? _language[0] : _language) ?? 'EN';
  });

  return {
    selectedLanguage: computedLanguage.value,
  };
};
