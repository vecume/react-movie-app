import styled from 'styled-components';

export const StyledHeader = styled.div`
  background: #1c1c1c;
  padding: 0 20px;
  box-sizing: border-box;

  .header-content {
    max-width: 1280px;
    min-height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    box-sizing: border-box;

    @media screen and (max-width: 500px) {
      min-height: 0px;
    }
  }
`

export const StyledRMDBLogo = styled.img`
  width: 250px;
  
  @media screen and (max-width: 500px) {
    width: 150px;
  }
`


export const StyledTMDBLogo = styled.img`
  width: 122px;
  
  @media screen and (max-width: 500px) {
    width: 80px;
  }
`
