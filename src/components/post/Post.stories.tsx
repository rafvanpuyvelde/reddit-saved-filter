import React from 'react';
import type { Story } from '@storybook/react/types-6-0';

import Post, { PostProps } from './Post';

export default {
  title: 'Components/Post',
  component: Post,
};

const defaultArgs: PostProps = {
  image: 'https://picsum.photos/50',
  src: 'https://www.google.com',
  text: 'How to create neon text in css',
};

// @ts-expect-error
const Template: Story = (props) => <Post {...props} />;

export const Default = Template.bind({});
Default.args = { ...defaultArgs };
