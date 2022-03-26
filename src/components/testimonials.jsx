export const Testimonials = (props) => {
  return (
    <div id='testimonials'>
      <div className='container'>
        <div className='section-title text-center'>
          <h2>使命與願景</h2>
          <p>
            當全世界還在強調個資保護的落實<br />
            我們決定再更向前一步邁進全球資料正義的未來<br />
            讓鉅額的資料利潤不再被大型網路公司所壟斷<br />
            能夠真正回歸到資料生產者手中
          </p>
        </div>
        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className='col-md-4'>
                  <div className='testimonial'>
                    <div className='testimonial-image'>
                      {' '}
                      <img src={d.img} alt='' />{' '}
                    </div>
                    <div className="testimonial-data">
                      <p>{d.text}</p>
                      {/* <div className='testimonial-meta'> - {d.name} </div> */}
                    </div>
                  </div>
                </div>
              ))
            : 'loading'}
        </div>
      </div>
    </div>
  )
}
