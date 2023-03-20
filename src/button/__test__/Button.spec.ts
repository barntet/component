import Button from '../Button';

import { shallowMount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';

/**
 *  shallowMount 初始化组件，这里是利用了工具完成的
 */

// 测试分组
describe('test button', () => {
  // mount
  test('mount @vue/test-utils', () => {
    // @vue/test-utils
    const wrapper = shallowMount(Button, {
      slots: {
        default: 'Button',
      },
    });

    // 断言
    expect(wrapper.text()).toBe('Button');
  });
});

describe('color', () => {
  test('default', () => {
    const wrapper = shallowMount(Button, {
      slots: {
        default: 'Button',
      },
    });
    expect(
      wrapper
        .classes()
        .map((v) => v.replace('\n', ''))
        .includes('bg-blue-500')
    ).toBe(true);
  });

  test('red', () => {
    const wrapper = shallowMount(Button, {
      slots: {
        default: 'Button',
      },
      props: {
        color: 'red',
      },
    });
    expect(
      wrapper
        .classes()
        .map((v) => v.replace('\n', ''))
        .includes('bg-red-500')
    ).toBe(true);
  });
});

describe('size', () => {
  test('default', async () => {
    const wrapper = shallowMount(Button, {
      slots: {
        default: 'Button',
      },
    });
    expect(wrapper.props('size')).toBe('medium');
    expect(wrapper.classes().includes('text-base'));

    await wrapper.setProps({ size: 'small' });
    expect(wrapper.props('size')).toBe('small');
    expect(wrapper.classes().includes('text-sm'));

    await wrapper.setProps({ size: 'large' });
    expect(wrapper.props('size')).toBe('large');
    expect(wrapper.classes().includes('text-lg'));
  });
});

test('props', () => {
  const wrapper = shallowMount(Button, {});
  expect(wrapper.props()).toEqual({
    size: 'medium',
    color: 'blue',
    round: false,
    plain: false,
    icon: '',
  });
});
