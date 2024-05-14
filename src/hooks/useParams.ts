import type { RouteParams } from 'vue-router';
export const useParams = <T extends RouteParams>() => {
  return computed(() => useRoute().params as T);
};
