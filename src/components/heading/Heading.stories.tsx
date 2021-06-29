import React from 'react';
import type { Story } from '@storybook/react/types-6-0';

import Heading from './Heading';

export default {
  title: 'Components/Heading',
  component: Heading,
};

const defaultArgs = { text: 'r/web_design' };

const Template: Story = (props) => (
  <Heading {...props}>{defaultArgs.text}</Heading>
);

export const Default = Template.bind({});
Default.args = { ...defaultArgs };
