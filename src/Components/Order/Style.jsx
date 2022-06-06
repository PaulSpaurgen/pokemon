import styled from "styled-components";

const CardWrap = styled.div`
  background-color: black;
  position: absolute;
  top: 30px;
  width: 20%;
  left: 36%;
  height: fit-content;
  background-color: whitesmoke;
  border-radius: 15px;
  padding: 60px;
  .cross {
    position: relative;
    top: -30px;
    left: 300px;
    cursor: pointer;
    :hover {
      color: gray;
    }
  }
  .heading {
    font-size: 30px;
    font-weight: 900;
    color: #f05a03;
  }
  .subheading {
    color: gray;
    font-size: 15px;
    font-weight: 800;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 40px;
    p {
      margin-top: -1px;
      font-size: 200;
    }
  }
  .row {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .Select {
    margin-top: 40px;
  }
  p {
    font-size: 12px;
    font-weight: 800;
    margin-left: 10px;
  }
  .bag {
    gap: 60px;
    justify-content: flex-start;
    font-size: 12px;
    font-weight: 800;
    color: gray;
  }
  .cost{
      margin-top: 20px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      .p-1{
          color:gray;
      }
  }
  .btn{
      margin-top: 20px;
      button{
          border: none;
          font-size: 12px;
          font-weight: 600;
          padding: 10px 40px;
          border-radius: 5px;
          color: white;
          background-color: #ee4115;
          cursor: pointer;
          :hover{
              background-color:#e56d4f ;
          }
      }
  }
`;
export { CardWrap };
