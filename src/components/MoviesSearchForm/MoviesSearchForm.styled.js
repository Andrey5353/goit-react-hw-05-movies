import styled from 'styled-components';

export const SearchForm = styled.form`
  display: flex;
  justify-content: center;

  margin-bottom: ${({ theme }) => theme.space[4]};
`;

export const SubmitButton = styled.button`
  cursor: pointer;
`;
