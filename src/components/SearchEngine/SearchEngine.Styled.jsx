import styled from 'styled-components'

export const Container = styled.div`
  width: 70%;
  margin: 0 auto;
  margin-bottom: 4rem;

`
export const Result = styled.p`
  font-weight: 600;
  & span{
    font-size:1.5rem;
    color:#2962FF;
  }
`
export const ButtonGroup = styled.div`
  text-align: center;
  width: 85%;
`
export const ViewButton = styled.button`
  padding: 1rem 1rem;
  color: white;
  justify-self: center;
  align-self: center;
  background-color: #2962FF;
  border-radius: .8rem;
  margin : 2rem 0;
`
