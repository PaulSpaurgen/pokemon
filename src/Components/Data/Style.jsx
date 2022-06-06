import styled from "styled-components";

const CardWrap = styled.div`
  background-color: black;
  position: absolute;
  top: 30px;
  width: 30%;
  left: 36%;
  height: fit-content;
  background-color: whitesmoke;
  border-radius: 15px;
  padding: 60px;
  .cross {
    position: relative;
    top: -30px;
    left: 460px;
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
  .partner{
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap:20px;
      .name{
        font-size: 20px;
        font-weight: 900;
        p{
            color: #f05a03;
        }
      }
      .img{
          height: 250px;
          width: 250px;
          img{
              height: 100%;
              width: 100%;

          }
      }
  }
  .extradets{
      display: flex;
      flex-direction: column;
      gap:10px;
      font-size: 15px;
      font-weight: 800;
  }
  .items{
      display: grid;
      grid-template-columns: 1fr 1fr;
      column-gap: 20px;
      row-gap: 20px;
      font-size: 15px;
      font-weight: 800;
  }
  .int{
    font-size: 22px;
      font-weight: 900;
  }
  `

  export {CardWrap}