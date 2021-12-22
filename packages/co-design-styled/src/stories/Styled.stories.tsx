import React from 'react';
import styled from '../styled';

export default {
  title: '@co-design/styled',
};

export const Tag = () => {
  return (
    <div>
      <StyledDiv>Styled Div</StyledDiv>
    </div>
  );
};

const StyledDiv = styled.div`
  color: ${({ theme }) => theme.colorPalettes.purple[6]};
`;

export const Component = () => {
  return (
    <div>
      <StyledComponent color="red">Styled Component</StyledComponent>
    </div>
  );
};

interface Props {
  children: React.ReactNode;
  color: string;
}

const CustomDiv = (props: Props) => {
  return <div {...props} />;
};

const StyledComponent = styled(CustomDiv)(({ props, theme }) => ({
  color: props.color,
  backgroundColor: theme.colorPalettes.blue[3],
}));

export const TaggedLiteral = () => {
  return (
    <div>
      <TaggedDiv color="blue">Tagged Literal</TaggedDiv>
    </div>
  );
};

const borderColor = '#aaa';
const TaggedDiv = styled(CustomDiv)`
  color: ${({ props }) => props.color};
  background-color: ${({ theme }) => theme.colorPalettes.red[3]};
  border: 4px solid ${borderColor};
`;
