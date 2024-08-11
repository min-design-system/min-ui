import styled from '@core/styled';

export const StyledIcon = styled.i`
  font-family: MinSymbolRoundVF;

  color: ${({
    theme: {
      semanticColor: { contents }
    }
  }) => contents.default};

  ${({
    theme: {
      typography: { body }
    }
  }) => `
      font-size: ${body.mediumStrong.size};
      font-weight: ${body.mediumStrong.weight};
      line-height: ${body.mediumStrong.lineHeight.default};
  `}
`;
