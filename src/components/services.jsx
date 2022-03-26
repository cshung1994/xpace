export const Services = (props) => {
  return (
    <div id='services' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Data Protection & Justice Project</h2>
          <p>
            建立在 web 3.0 技術上
            以保護用戶資料、資料正義為核心
            功能強大的次元社群論壇工具
            一次滿足用戶交友、專取收入的需求
          </p>
        </div>
        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className='col-md-4'>
                  {' '}
                  {/* <i className={d.icon}></i> */}
                  <div className='service-desc'>
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                    <p>瞭解更多</p>
                  </div>
                </div>
              ))
            : 'loading'}
        </div>
      </div>
    </div>
  )
}
