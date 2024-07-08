import { describe, expect, it, beforeEach } from 'vitest';
import { shallowMount } from '@vue/test-utils';

import Card from '@/components/Card.vue';
import type { VueElement } from 'vue';

describe('Card.vue', () => {
  // it('renders card title and content titleClass', () => {
  //   const title = 'Card Title';
  //   const subTitle = 'Card Content';
  //   const titleClass = 'p-4';
  //   const wrapper = shallowMount(Card, {
  //     propsData: {
  //       title,
  //       subTitle,
  //       titleClass
  //     }
  //   });
  //   expect(wrapper.text()).toMatch(title);
  //   expect(wrapper.text()).toMatch(subTitle);

  //   let flag = false;
  //   wrapper.findAll('div').forEach((el) => {
  //     if (el.classes().includes(titleClass) && el.classes().includes('lg:p-4')) {
  //       flag = true;
  //     }
  //   });
  //   expect(flag).toBe(true);
  // });

  // it('test card icon attrbute', () => {
  //   const icon = 'i-mdi:web';
  //   const wrapper = shallowMount(Card, {
  //     propsData: { icon }
  //   });
  //   const html = wrapper.html();
  //   expect(html).toMatch(icon);
  // });
  // // 反向测试icon
  // it('when prop image, it is not have icon', () => {
  //   const icon = 'i-mdi:web';
  //   const wrapper = shallowMount(Card, {
  //     propsData: { image: 'test.com' }
  //   });
  //   const html = wrapper.html();
  //   expect(html).not.toMatch(icon);
  // });

  // 简洁写法
  type imageTypeType = 'default' | 'rounded' | 'avatar';

  const imageTypeValue: imageTypeType = 'default';
  const props = {
    image: 'bg.png',
    title: 'Card Title',
    subTitle: 'Card Content',
    titleClass: 'lg:p-4',
    imageType: imageTypeValue,
    height: 'h-60',
    url: 'www.imooc.com'
  };

  let wrapperInstance: ReturnType<typeof shallowMount>;
  beforeEach(() => {
    // 初始化wrapper
    // beforeEach -> 初始化wrapper并渲染
    // 写对应的测试用例
    wrapperInstance = shallowMount(Card, {
      propsData: props
    });
  });
  it('Card default属性测试', () => {
    const html = wrapperInstance.html();

    expect(html).toMatch(props.height);
    expect(html).toMatch(props.title);
    expect(html).toMatch(props.subTitle);
    expect(html).toMatch(props.titleClass);
    expect(html).toMatch(props.image);
    expect(html).not.toMatch(props.url);

    expect(wrapperInstance).toBeTruthy();
  });
  it('测试slot传递的属性', () => {
    const propsTmp = { ...props };
    const wrapper = shallowMount(Card, {
      propsData: { ...propsTmp, icon: 'i-mdi:web' },
      slots: {
        default: (item: any) => {
          return h('div', {}, JSON.stringify(item));
        }
      }
    });
    expect(wrapper.html()).toMatch(props.url);
    expect(wrapper.html()).toMatch(props.image);
    expect(wrapper.html()).toMatch('i-mdi:web');
    expect(wrapper.html()).toMatch(props.title);
    expect(wrapper.html()).toMatch(props.subTitle);
  });

  it('Card rounded属性', async () => {
    await wrapperInstance.setProps({
      imageType: 'rounded'
    });
    const html = wrapperInstance.html();
    expect(html).toMatch('rounded overflow-hidden');

    await wrapperInstance.setProps({
      title: undefined,
      subTitle: undefined
    });
    expect(wrapperInstance.html()).toMatch('h-60 rounded');
  });

  it('Card avatar属性', async () => {
    await wrapperInstance.setProps({
      imageType: 'avatar'
    });
    expect(wrapperInstance.html()).toMatch('h-20 w-20 rounded-50% self-center absolute top-0 translate-y--1/2');
    expect(wrapperInstance.html()).toMatch('relative mt-10');

    await wrapperInstance.setProps({
      border: true
    });
    expect(wrapperInstance.html()).toMatch('border border-gray-300');
  });
});
