import styled from 'styled-components';

const Styles = styled.div`
   {

  .book-card {
    margin: 12px;
    border-radius: 12px;
    width: 300px;
    &:hover {
      cursor: pointer;
    }
  }

  .book-cover {
    width: 300px;
    height: 450px;
  }

  .book-list{
    margin-left: 130px;
    margin-right: 130px;
    margin-top: 50px;
  }

  .book-price {
    color: green
  }

  .navbar-brand {
    color: #CACFD6
    &hover: {
      color: white
    }
  }


  .navbar {
    background-color: #2F4550;
  }

`;

export default Styles;
