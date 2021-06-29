import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.a`
  display: flex;
  align-items: center;
  background: #fafafa;
  border-radius: 10px;
  padding: 5px 0 5px 8px;
  text-decoration: none;
`;

const Text = styled.p`
  font-weight: 600;
  font-size: 13px;
  color: #2c2c2c;
  margin-left: 17px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Image = styled.img`
  border-radius: 10px;
  height: 45px;
  width: 45px;
`;

export interface SavedPost {
  image: string;
  text: string;
  src: string;
}

export type PostProps = SavedPost;

const Post: React.FC<PostProps> = ({ image, text, src }) => {
  return (
    <Wrapper href={src}>
      <Image src={image} alt="post thumbnail" />
      <Text>{text}</Text>
    </Wrapper>
  );
};

export default Post;
