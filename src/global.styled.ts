import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
  height: 100vh;
  width: 100vw;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;


export const WidgetContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-color: #121d2f;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);
  height: 350px;
  width: 400px;
  padding: 3.5rem;

  @media screen and (max-width: 768px) {
    height: 100%;
    width: fit-content;
  }
`;

export const WidgetHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: .1rem 0;
`

export const WidgetHeaderLeft = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`

export const WidgetTitle = styled.h1`
  font-size: 1.5rem;
  color: #fff;
  font-weight: 500;
  margin-bottom: 1rem;
`

export const WidgetDropdown = styled.select`
  background-color: rgba(183, 198, 213, 0.37);
  border: none;
  width: 8rem;
  color: white;
  border-radius: 5px;
  padding: 0.5rem;
  font-size: 1rem;
  font-weight: 500;
  outline: none;
  cursor: pointer;

`

export const WidgetTimeFrameDropdown = styled.select`
  background-color: #5d32de;
  border: none;
  border-radius: 5px;
  padding: 0.5rem;
  font-size: 1rem;
  font-weight: 500;
  color: white;
  outline: none;
  cursor: pointer;
  margin-left: 1rem;
`


export const WidgetChartContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`


export const WidgetFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
`
export const WidgetLogo = styled.img`
  height: 2rem;
  justify-self: flex-end;
  display: flex;
`

export const Title = styled.h1`
  font-size: .8rem;
  color: #fff;
  font-weight: 500;
`


export const Value = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: green;
  gap: 1rem;
`


export const DropdownContainer = styled.div`
  position: relative;
`;

export const DropdownButton = styled.div`
  padding: 8px 12px;
  cursor: pointer;
  background-color: rgba(90, 99, 152, 0.37);
  border-radius: 5px;
  color: white;
  width: 120px;
`;

export const DropdownList = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  max-height: 200px;
  overflow-y: auto;
  background-color: rgb(61, 72, 134);
`;

export const DropdownItem = styled.div`
  padding: 8px 12px;
  cursor: pointer;
  color: white;

  &:hover {
    background-color: #f2f2f2;
  }
`;


export const DropDownDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-size: .6rem;
  text-align: center;
  margin: 1rem 0;
`

export const PercentageRect = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2rem;
  width: min-content;
  padding: .2rem;
  background-color: ${props => props.color};
  color: white;
  border-radius: 5px;
  margin: .5rem 0;
`
