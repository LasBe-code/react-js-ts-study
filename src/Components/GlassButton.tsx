import styled from 'styled-components';

export const GlassButton = styled.button`
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(1px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  padding: 1rem;
  margin: 0.5rem;
  color: white;
  font-weight: bold;

  &:hover {
    background: rgba(255, 255, 255, 0.05);
  }
`;
