import styled from "styled-components";

export const Container = styled.div`
  background-color: #FFFFFF;
  width: 100%;
  height: 31rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;
  align-items: center;
  gap: 2rem;
  padding: 5% 0 5% 0;
  margin-top: 2%;
`

export const ChartContainer = styled.div`
  width: 70%;
`

export const StatisticContainer = styled.div`
  display: flex;
  flex-direction: column;
  
`

export const Labelh1 = styled.div`
  margin-bottom: 2rem;
`

export const LabelStyled = styled(Labelh1)`
  background: linear-gradient(263.17deg, rgba(78, 75, 119, 0.8) -118.34%, #6D5E9D -1.83%, rgba(244, 75, 66, 0.7) 95.09%, rgba(240, 88, 64, 0.8) 221.67%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  text-align: left;
`
