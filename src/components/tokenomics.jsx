import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);


const data = {
  labels: [
    '生態基金',
    '團隊、創始人',
    '早期投資',
    '社群、流動性挖礦獎勵',
    '流動性',
    // 'Orange',
  ],
  datasets: [
    {
      // label: '# of Votes',
      data: [40, 20, 10, 20, 5],
      backgroundColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        // 'rgba(255, 159, 64, 1)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        // 'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

export const Tokenomics = (props) => {
  return (
    <div id="tokenomics">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>XPA Tokenomics</h2>
              {/* <p>{props.data ? props.data.paragraph : "loading..."}</p> */}
              {/* <h3>第一個專注於資料正義的社群 / 交友 / BBS 論壇工具</h3> */}
              <p>白皮書查看詳細資訊</p>
              <div className="list-style">
                {/* <div>
                  <ul>
                    {props.data
                      ? props.data.Why.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div> */}
                {/* <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why2.map((d, i) => (
                          <li key={`${d}-${i}`}> {d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div> */}
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-md-6">
            {" "}
            <Doughnut data={data} />
          </div>
        </div>
      </div>
    </div>
  );
};
