import styled from 'styled-components';

const AppWrapper = styled.div`
  .app {
    padding: 20px;
    border: 1px solid #e0e0e0;
    background-color: #f2f2f2;
  }
  div {
    background-color: #fff;
    font-family: "Trips Sans", Arial, sans-serif;
    color: rbg(44, 44, 44);
  }
  .header-text {
    font-size: 20px;
  }
  .header {
    padding: 0.5px;
    border-bottom: 2px solid #e0e0e0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .modal input {
    background-color: #000;
    color: #fff;
    padding: 8px 16px;
    font-weight: 700;
    position: relative;
    text-align: center;
    cursor: pointer;
    font-size: 14px;
    line-height: 18px;
    border: 1px solid transparent;
    border-radius: 4px;
  }
  .modal input:hover {
    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.1);
  }
  .filter-header {
    padding-top: 6px;
    margin-bottom: 5px;
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
    color: #000a12;
  }
  .filters:before,
  .filters:after {
    content: "";
    display: table;
  }
  .filters:after{
    clear: both;
  }
  .filters {
    margin-left: auto;
    margin-right: auto;
    width: 100%;
  }
  .filters ul {
    box-sizing: border-box;
    diplay: block;
    flex-basis: auto;
    flex-grow: 0;
    flex-shrink: 0;
    font-size: 14px;
    height: auto;
    padding: 8px;
    float: left;
    width: 30%;
    list-style: none;
    text-align: left;
  }
  .filters label,
  .filters input {
    cursor: pointer;
    border-spacing: 0 12px;
  }
  .top-portion {
    padding: 8px;
    border: 1px solid #e0e0e0;
    margin: 8px;
  }
  .search {
    padding: 8px;
    border: 1px solid #e0e0e0;
    margin: 8px;
    clear: both;
  }
  .reviews {
    margin: 0 1.5% 24px 1.5%
    clear: both;
  }
`;

export default AppWrapper;