import styled from './styled';
import tags from './tags';
import { CreateStyled, StyledArrayFunction } from './typing';

const newStyled = styled.bind(null) as CreateStyled;

tags.forEach((tag) => {
  newStyled[tag] = (styledArray, ...styledArrayFunctions) =>
    newStyled(tag)(
      styledArray,
      ...(styledArrayFunctions as StyledArrayFunction<typeof tag, unknown>[])
    );
});

export default newStyled;
