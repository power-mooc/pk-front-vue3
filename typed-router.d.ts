/* eslint-disable */
/* prettier-ignore */
// @ts-nocheck
// Generated by unplugin-vue-router. ‼️ DO NOT MODIFY THIS FILE ‼️
// It's recommended to commit this file.
// Make sure to add this file to your tsconfig.json file as an "includes" or "files" entry.

declare module 'vue-router/auto-routes' {
  import type {
    RouteRecordInfo,
    ParamValue,
    ParamValueOneOrMore,
    ParamValueZeroOrMore,
    ParamValueZeroOrOne,
  } from 'unplugin-vue-router/types'

  /**
   * Route name map generated by unplugin-vue-router
   */
  export interface RouteNamedMap {
    '/': RouteRecordInfo<'/', '/', Record<never, never>, Record<never, never>>,
    '/[...all]': RouteRecordInfo<'/[...all]', '/:all(.*)', { all: ParamValue<true> }, { all: ParamValue<false> }>,
    '/about': RouteRecordInfo<'/about', '/about', Record<never, never>, Record<never, never>>,
    '/community': RouteRecordInfo<'/community', '/community', Record<never, never>, Record<never, never>>,
    '/project': RouteRecordInfo<'/project', '/project', Record<never, never>, Record<never, never>>,
    '/project/test': RouteRecordInfo<'/project/test', '/project/test', Record<never, never>, Record<never, never>>,
    '/study': RouteRecordInfo<'/study', '/study', Record<never, never>, Record<never, never>>,
    '/study/[id]': RouteRecordInfo<'/study/[id]', '/study/:id', { id: ParamValue<true> }, { id: ParamValue<false> }>,
    '/study/[id]/': RouteRecordInfo<'/study/[id]/', '/study/:id', { id: ParamValue<true> }, { id: ParamValue<false> }>,
    '/study/cart': RouteRecordInfo<'/study/cart', '/study/cart', Record<never, never>, Record<never, never>>,
    '/study/list': RouteRecordInfo<'/study/list', '/study/list', Record<never, never>, Record<never, never>>,
    '/study/test': RouteRecordInfo<'/study/test', '/study/test', Record<never, never>, Record<never, never>>,
  }
}
