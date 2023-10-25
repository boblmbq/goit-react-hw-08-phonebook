import styled from '@emotion/styled';

const justiContent = logedIn => {
  if (logedIn) return 'space-between';
  return 'end';
};

export const HeaderStyled = styled.header`
  height: auto;
  padding: 20px 20px;
`;

export const UlStyled = styled.ul`
  display: flex;
  justify-content: ${props => justiContent(props.logedIn)};
`;

export const LiAuthStyled = styled.ul`
  display: flex;
  gap: 8px;
  flex-direction: column;
  align-items: end;
`;
