import { Chart } from 'react-google-charts';
import styled from 'styled-components';


function getRandomInt() {
  return Math.round(Math.random() * (40 - 1)) + 1;
};
function getRandomDate() {
  return Math.round(Math.random() * (30 - 1)) + 1;
};

export const pow: number[] = [];
const date: number[] = [];
for (let i = 0; i < 4; i++) {
  const power = getRandomInt();
  pow.push(power)
  const nov = getRandomDate()
  date.push(nov)
};
pow.sort((a, b) => a - b);
date.sort((a, b) => a - b);

// const data: any[] = [];
// for (let i = 0; i < 5; i++) {
//   if (i == 0) {
//     data.push(['Дата', 'Показатель'])
//   } else {
//     data.push([date[i-1] + ' ноября, 2022 ', pow[i-1]])
//   }
// }


export const data = [
  ['Дата', 'Показатель'],
  [date[0] + ' ноября, 2022 ', pow[0]],
  [date[1] + ' ноября, 2022 ', pow[1]],
  [date[2] + ' ноября, 2022 ', pow[2]],
  [date[3] + ' ноября, 2022 ', pow[3]],
];

// interface IVAxis{
//   minValue: number,
//   maxValue: number
// }

// interface IOptions{
//   legend: string,
//   colors: string[],
//   pointSize: number,
//   areaOpacity: number,
//   vAxis: IVAxis,
// }

const options = {
  legend: 'none',
  colors: ['#38c914'],
  pointSize: 15,
  areaOpacity: 0.1,
  vAxis: { minValue: 0, maxValue: 40 },
};

const stat_map = ['Удары', 'Скорость', 'Реакция', 'Прыжок']
const Mystats = () => {

  return (
    <ContainerStat>
      <WrapStat>
        {stat_map.map(e =>
          <Parameter >
            <StatTitle>
              {e}
            </StatTitle>
            <Graph>
              <Chart
                chartType="AreaChart"
                data={data}
                options={options}
                width='570px'
                height='400px'
              />
            </Graph>
          </Parameter>
        )}
      </WrapStat>
    </ContainerStat>
  );
};


const ContainerStat = styled.div`
  max-width: 1220px;
  margin: 0 auto;
  width: calc(100% - 32px);
  padding: 0 17px ;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-bottom: solid 1px #25BA00;
`;


const WrapStat = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 20px 0;
        flex-wrap: wrap;
        gap: 48px;

        `;

const Parameter = styled.div`

        `;
const Graph = styled.div`
        font-family: 'Gotham Pro';
        `;

const StatTitle = styled.div`
        font-family: 'Gotham Pro Regular', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 19px;
        letter-spacing: 0.05em;
        text-transform: uppercase;
        color: #2D2D2D;
        padding-bottom:5px;
        border-bottom: 1px solid #25BA00;
        width: fit-content;
        margin-left: 85px;

        `;

export default Mystats