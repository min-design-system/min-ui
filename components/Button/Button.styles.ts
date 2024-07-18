import styled from '@core/styled';

export const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 11px;
  outline: 0;
  cursor: pointer;
  border: 1px solid transparent;
  border-radius: 8px;
  background-color: ${({
    theme: {
      semanticColor: { contents }
    }
  }) => contents.primary};
  color: ${({
    theme: {
      semanticColor: { contents }
    }
  }) => contents.white};

  ${({
    theme: {
      typography: {
        body: { mediumStrong }
      }
    }
  }) => `
    font-size: ${mediumStrong.size};
    font-weight: ${mediumStrong.weight};
    line-height: ${mediumStrong.lineHeight.default};
  `}
`;
