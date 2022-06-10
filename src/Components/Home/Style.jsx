import styled from "styled-components";

const PageWrapper = styled.div`
  width: 100%;
  height: fit-content;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const CardWrapper = styled.div`
  margin: 80px;
  width: 20%;
  height: fit-content;
  background-color: whitesmoke;
  border-radius: 15px;
  padding: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  .text {
    margin-top: 30px;
    display: flex;
    gap: 20px;
    flex-direction: column;
  }
  .slide {
    /* margin-top: 50px; */
  }
  .sub {
  }
  p {
    font-size: 12px;
    font-weight: 600;
  }
  .Select {
    margin-top: 30px;
  }
  .sub-t {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin-top: 20px;
    color: gray;
    font-size: 14px;
    font-weight: 800;
    align-items: center;
    gap: 110px;
    width: 300px;
    cursor: pointer;
  }
  .images {
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 15px;
    .imageM {
      /* border: 2px solid black; */
      background-color: lightgray;
      padding: 10px;
      border-radius: 150px;
      transition: ease-out;
      :hover {
        border: 2px solid #f05a03;
        cursor: pointer;
      }
      img {
        height: 100%;
        width: 100%;
      }
    }
  }
  .dataDisp {
    display: grid;
    grid-template-columns: auto auto;
    row-gap: 12px;
    column-gap: 12px;

    .dataItem {
      display: flex;
      height: 20px;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      padding: 5px 10px;
      border-radius: 15px;
      gap: 2px;
      cursor: pointer;
      input {
        width: 60px;
        border: none;
      }
      .cross {
        margin-top: 3px;
        :hover {
          color: #f05a03;
        }
      }
    }
  }
  .Cost {
    margin-top: 20px;
    display: flex;
    width: 300px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    .p-1 {
      color: gray;
      font-size: 15px;
      font-weight: 900;
    }
    .p-2 {
      font-size: 15px;
      font-weight: 800;
    }
  }
  .btn {
    margin-top: 20px;
    button {
      border: none;
      font-size: 12px;
      font-weight: 300;
      letter-spacing: 0.3px;
      padding: 10px 40px;
      border-radius: 5px;
      color: white;
      background-color: #ee4115;
      cursor: pointer;
      :hover {
        background-color: #e56d4f;
      }
    }
  }
`;
export { PageWrapper, CardWrapper };
