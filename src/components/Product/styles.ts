import styled from 'styled-components'
import colors from '../../styles/variables'

export const Card = styled.div`
  display: flex;
  background-color: ${colors.CardBackground};
  border: 1px solid ${colors.CardBorder};
  border-radius: 8px;
  padding: 12px;
  margin-bottom: 12px;
  box-shadow: 0 2px 5px ${colors.CardShadow};
  align-items: center;
  gap: 12px;
`

export const Image = styled.img`
  width: 60px;
  height: 100%;
  object-fit: cover;
  border-radius: 6px;
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
`

export const Title = styled.h3`
  font-size: 1rem;
  color: ${colors.CardTitle};
  margin: 0;
`

export const Price = styled.span`
  font-size: 1.1rem;
  font-weight: bold;
  color: ${colors.CardPrice};
  margin-top: 4px;
`

export const Market = styled.span`
  font-size: 0.85rem;
  color: ${colors.CardMarket};
  margin-top: 4px;
`
export const UpdateInfo = styled.span`
  font-size: 0.75rem;
  color: ${colors.CardMarket};
  margin-top: auto;
`


