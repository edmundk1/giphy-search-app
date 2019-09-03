import styled from 'styled-components';

const FlexContainer = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.column ? 'column' : (props.flexDirection || 'row'))};
  justify-content: ${(props) => props.justification};
  align-items: ${(props) => props.itemAlignment};
  align-content: ${(props) => props.contentAlignment};
  flex-wrap: ${(props) => props.wrap}
`;

export default FlexContainer;
