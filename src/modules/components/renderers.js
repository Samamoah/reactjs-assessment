import React from 'react';

import ProgressiveImage from './ProgressiveImage';
import styled from 'styled-components';

export const ProductMediaWrapper = styled.div`
  background-color: #eeeef0;
  position: relative;
`;

export function renderItem(item, fit = 'contain') {
  return (
    <ProductMediaWrapper>
      <ProgressiveImage
        fit={fit}
        altText={item.description}
        presrc={item.thumbnail}
        srcs={{
          large: item.original,
          thumbnail: item.thumbnail,
          medium: item.original,
          small: item.original,
        }}
      />
    </ProductMediaWrapper>
  );
}
