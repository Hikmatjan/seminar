import styled from "styled-components";

const Wrapper = styled.div`
  width: 80%;
  height: 78px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid green;
`;
Wrapper.Left = styled.div`
  .size {
    width: 20%;
    height: 20%;
  }
`;
Wrapper.Middle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;
Wrapper.Middle.Item = styled.div`
  font-size: 16px;
  margin: auto;
`;
Wrapper.Right = styled.div``;

export { Wrapper };
