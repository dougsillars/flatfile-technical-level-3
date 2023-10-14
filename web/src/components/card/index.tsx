import styled from 'styled-components'

const CardContainer = styled.div`
  border-radius: 3px;
  border-bottom: 1px solid #ccc;
  background-color: #fff;
  position: relative;
  padding: 10px;
  cursor: pointer;
  max-width: 250px;
  margin-bottom: 7px;
  min-width: 230px;
`

const CardTitle = styled.div``

const Card = ({ card: { title,description } }: any) => (
  <CardContainer className='card'>
    <CardTitle>Card: {title}</CardTitle>
    <p>Description: {description}</p>
  </CardContainer>
)

export default Card
