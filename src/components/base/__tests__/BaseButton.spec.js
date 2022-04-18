import { describe, it, expect } from 'vitest';

import { mount } from '@vue/test-utils';
import BaseButton from '../BaseButton.vue';

describe('BaseButton', () => {
  it('emit click event', async () => {
    const wrapper = mount(BaseButton);
    await wrapper.trigger('click');
    expect(wrapper.emitted()).toHaveProperty('click');
  });

  it('render slot', () => {
    const wrapper = mount(BaseButton, {
      slots: {
        default: 'test',
      },
    });
    expect(wrapper.text()).toBe('test');
  });

  it.each([
    {
      disabled: false,
      outlined: false,
      text: false,
      expected:
        'select-none px-8 rounded font-semibold bg-blue-400 text-white hover:bg-blue-200 active:bg-blue-600 h-[42px]',
    },
    {
      disabled: true,
      outlined: false,
      text: false,
      expected:
        'px-8 select-none rounded font-semibold bg-blue-400 text-white hover:bg-blue-200 active:bg-blue-600 pointer-events-none opacity-80 bg-gray-300 h-[42px]',
    },
    {
      disabled: false,
      outlined: true,
      text: false,
      expected:
        'px-8 select-none rounded font-semibold text-blue-400 hover:text-blue-200 active:text-blue-600 border border-blue-400 bg-transparent hover:border-blue-200 active:border-blue-600 h-[42px]',
    },
    {
      disabled: false,
      outlined: false,
      text: true,
      expected:
        'px-8 select-none rounded font-semibold text-blue-400 hover:text-blue-200 active:text-blue-600 h-5',
    },
    {
      disabled: true,
      outlined: true,
      text: false,
      expected:
        'px-8 select-none rounded font-semibold pointer-events-none text-gray-300 border-gray-300 text-blue-400 hover:text-blue-200 active:text-blue-600 border border-blue-400 bg-transparent hover:border-blue-200 active:border-blue-600 h-[42px]',
    },
    {
      disabled: true,
      outlined: false,
      text: true,
      expected:
        'px-8 select-none rounded font-semibold pointer-events-none text-blue-400 hover:text-blue-200 active:text-blue-600 h-5 text-gray-300',
    },
  ])(
    'should contain classes depending on props',
    ({ disabled, outlined, text, expected }) => {
      const wrapper = mount(BaseButton, {
        props: { disabled, outlined, text },
      });
      const classes = wrapper.classes();

      expect(expected.split(' ').length).toBe(classes.length);
      classes.forEach((c) => {
        expect(expected).toContain(c);
      });
    },
  );
});
