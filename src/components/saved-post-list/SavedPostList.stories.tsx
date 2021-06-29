import React from 'react';
import type { Story } from '@storybook/react/types-6-0';

import SavedPostList, { SavedPostListProps } from './SavedPostList';

export default {
  title: 'Components/SavedPostList',
  component: SavedPostList,
};

const defaultArgs: SavedPostListProps = {
  posts: [
    [
      'r/web_design',
      [
        {
          uuid: '1',
          title: 'First web design post',
          src: 'https://www.google.com',
          subreddit: 'r/web_design',
          thumbnail: {
            src: 'https://picsum.photos/50',
            height: 50,
            width: 50,
          },
        },
        {
          uuid: '2',
          title: 'Second web design post',
          src: 'https://www.google.com',
          subreddit: 'r/web_design',
          thumbnail: {
            src: 'https://picsum.photos/50',
            height: 50,
            width: 50,
          },
        },
        {
          uuid: '3',
          title: 'Third web design post',
          src: 'https://www.google.com',
          subreddit: 'r/web_design',
          thumbnail: {
            src: 'https://picsum.photos/50',
            height: 50,
            width: 50,
          },
        },
      ],
    ],
    [
      'r/ProgrammerHumor',
      [
        {
          uuid: '4',
          title: 'First humor post',
          src: 'https://www.google.com',
          subreddit: 'r/ProgrammerHumor',
          thumbnail: {
            src: 'https://picsum.photos/50',
            height: 50,
            width: 50,
          },
        },
        {
          uuid: '5',
          title: 'Second humor post',
          src: 'https://www.google.com',
          subreddit: 'r/ProgrammerHumor',
          thumbnail: {
            src: 'https://picsum.photos/50',
            height: 50,
            width: 50,
          },
        },
      ],
    ],
    [
      'r/battlestations',
      [
        {
          uuid: '6',
          title: 'First battle post',
          src: 'https://www.google.com',
          subreddit: 'r/battlestations',
          thumbnail: {
            src: 'https://picsum.photos/50',
            height: 50,
            width: 50,
          },
        },
      ],
    ],
  ],
};

const Template: Story = (props) => <SavedPostList {...props} />;

export const Default = Template.bind({});
Default.args = { ...defaultArgs };
