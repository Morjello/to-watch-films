import styled from "styled-components";


export const StyledSearchForm = styled.form`
  padding: 40px 0;
`
export const StyledSearchContainer = styled.div`
  background-color: #f9f9f9;
  border-radius: 40px;
  height: 46px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const StyledSearchInput = styled.input`
  width: 100%;
  text-decoration: none;
  border: none;
  background-color: #f9f9f9;
  height: 46px;
  border-radius: 40px;
  padding-left: 22px;
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  &:focus {
    outline: none;
  }
`