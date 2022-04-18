import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import BaseCheckbox from '../BaseCheckbox.vue';

describe('BaseCheckbox', () => {
  it('emit event on click', async () => {
    const isChecked = false;
    const wrapper = mount(BaseCheckbox, {
      attachTo: 'body',
      props: {
        modelValue: isChecked,
      },
    });

    await wrapper.trigger('click');

    expect(wrapper.emitted('update:modelValue')[0][0]).toBe(!isChecked);
  });
});
