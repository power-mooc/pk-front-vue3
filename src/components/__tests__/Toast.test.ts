import { describe, it, expect, vi, afterEach, beforeEach } from 'vitest';
import { mount, shallowMount } from '@vue/test-utils';
import Toast from '../Toast.vue';
const props = {
  text: 'hello toast',
  time: 2500
};

beforeEach(() => {
  vi.useFakeTimers();
});

afterEach(() => {
  vi.useRealTimers();
});
// vi.useFakeTimers();
describe('Toast.vue', async () => {
  it('Toast set props', async () => {
    const wrapper = shallowMount(Toast, {
      propsData: props
    });
    expect(wrapper).toBeTruthy();
    expect(wrapper.findAll('div').length).toBe(0);

    wrapper.setProps({
      modelValue: true
    });
    await wrapper.setProps({
      modelValue: true
    });
    const html = wrapper.html();

    expect(html).toContain(props.text);

    const count = vi.getTimerCount();
    expect(count).toBe(1);
    vi.advanceTimersByTime(props.time - 1);
    expect(vi.getTimerCount()).not.toBe(0);
    vi.runAllTimers();
    expect(vi.getTimerCount()).toBe(0);

    await wrapper.setProps({
      modelValue: false
    });

    expect(wrapper.emitted('update:modelValue')).toHaveLength(1);

    // @ts-ignore
    const value = wrapper.emitted('update:modelValue')[0];

    expect(value).toEqual([false]);
  });
});
