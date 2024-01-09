import styled from 'styled-components';

// styled-component : CSS를 JS안에 작성함
// styled-components, emotion, styled-jsx... 등 존재
// 각 컴포넌트마다 격리된 스타일 적용 가능
// 스타일이 적용된 컴포넌트 직접 생성

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledBox = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${(props) => props.bgColor || 'blue'};

  &:hover {
    transform: translateY(20px);
  }
`;

// 컴포넌트라서 props 사용 가능

function StyledComponents() {
  return (
    <StyledContainer>
      <StyledBox bgColor="pink"></StyledBox>
      <StyledBox></StyledBox>
      <StyledBox bgColor="orange"></StyledBox>
    </StyledContainer>
  );
}

export default StyledComponents;
