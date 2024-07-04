import { describe, expect, it } from 'vitest';
import { shallowMount } from '@vue/test-utils';

import Card from '@/components/Card.vue';

describe('Card.vue', () => {
  it('renders card title and content titleClass', () => {
    const title = 'Card Title';
    const subTitle = 'Card Content';
    const titleClass = 'p-4';
    const wrapper = shallowMount(Card, {
      propsData: {
        title,
        subTitle,
        titleClass
      }
    });
    expect(wrapper.text()).toMatch(title);
    expect(wrapper.text()).toMatch(subTitle);

    let flag = false;
    wrapper.findAll('div').forEach((el) => {
      if (el.classes().includes(titleClass) && el.classes().includes('lg:p-4')) {
        flag = true;
      }
    });
    expect(flag).toBe(true);
  });

  it('test card icon attrbute', () => {
    const icon = 'i-mdi:web';
    const wrapper = shallowMount(Card, {
      propsData: { icon }
    });
    const html = wrapper.html();
    expect(html).toMatch(icon);
  });
  // 反向测试icon
  it('when prop image, it is not have icon', () => {
    const icon = 'i-mdi:web';
    const wrapper = shallowMount(Card, {
      propsData: { image: 'test.com' }
    });
    const html = wrapper.html();
    expect(html).not.toMatch(icon);
  });
});
