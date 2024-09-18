import React from 'react';
import {Heading, Tag, Text} from "@/components";

const Page = () => {
  return (
    <div>
      <Heading tag="h2"  >
        children
      </Heading>
      <Text size='large'>text</Text>
      <Tag size={'small'} color={'primary'}>size</Tag>
    </div>
  );
};

export default Page;