import React from 'react';

const testimonials = (props) => (
  <div className="c-section -bg-green section-testimonials-1">
    <div className="c-container -size-full">
      <div className="row -gutter-none">
        <div className="col-lg-6 section-testimonials-1-photo"/>
        <div className="col-lg-6 section-testimonials-1-content">
          {/* Heading */}
          <h6 className="u-text-sup u-color-white">О НАЦИОНАЛЬНОЙ ПРЕМИИ</h6>
          <h2 className="u-text-title u-color-white">цели и задачи премии</h2>
          {/* Heading End */}
          {/* Testimonials */}
          <div className="c-testimonials-2 -align-left">
            {/*Carousel Wrapper*/}
            <div id="carousel-example-1z" className="carousel slide carousel-fade" data-ride="carousel">
              {/*Indicators*/}
              <ol className="carousel-indicators">
                <li data-target="#carousel-example-1z" data-slide-to={0} className="active" />
                <li data-target="#carousel-example-1z" data-slide-to={1} />
                <li data-target="#carousel-example-1z" data-slide-to={2} />
                <li data-target="#carousel-example-1z" data-slide-to={3} />
                <li data-target="#carousel-example-1z" data-slide-to={4} />
                <li data-target="#carousel-example-1z" data-slide-to={5} />
                <li data-target="#carousel-example-1z" data-slide-to={6} />
                <li data-target="#carousel-example-1z" data-slide-to={7} />
              </ol>
              {/*/.Indicators*/}
              {/*Items*/}
              <div className="carousel-inner" role="listbox">

                {/*First item*/}
                <div className="carousel-item active">
                  <div className="c-testimonials-2-item">
                    <div className="c-testimonials-2-message">
                      <p>Организация и проведение открытого конкурсного отбора на соискание Национальной премии в области туризма, как инструмента по выявлению наиболее успешных проектов/турпродуктов/туроператоров в области туризма, их продвижению, и по формированию заинтересованного отношения к индустрии туризма широкой общественности</p><br/>
                    </div>
                  </div>
                </div>
                {/*/First item end*/}

                {/*Second item*/}
                <div className="carousel-item">
                  <div className="c-testimonials-2-item">
                    <div className="c-testimonials-2-message">
                      <p>Создание информационной и коммуникационной площадок на базе Премии для обмена опытом и организации взаимодействия всех заинтересованных лиц и организаций в сфере развития туризма на территории регионов и страны, и как инструмента для  развития и продвижения территорий</p><br/>
                    </div>
                  </div>
                </div>
                {/*/Second item end*/}

                {/*Third item*/}
                <div className="carousel-item">
                  <div className="c-testimonials-2-item">
                    <div className="c-testimonials-2-message">
                      <p>Улучшение качества сервиса сферы услуг в туризме</p><br/>
                    </div>
                  </div>
                </div>
                {/*/Third item end*/}

                {/*Fourth item*/}
                <div className="carousel-item">
                  <div className="c-testimonials-2-item">
                    <div className="c-testimonials-2-message">
                      <p>Популяризация и развитие внутреннего туризма, улучшение его инвестиционной привлекательности</p><br/>
                    </div>
                  </div>
                </div>
                {/*/Fourth item end*/}

                {/*Fifth item*/}
                <div className="carousel-item">
                  <div className="c-testimonials-2-item">
                    <div className="c-testimonials-2-message">
                      <p>Организация сотрудничества всех заинтересованных лиц и организаций в сфере развития туризма на территории страны</p><br/>
                    </div>
                  </div>
                </div>
                {/*/Fifth item end*/}

                {/*Sixth item*/}
                <div className="carousel-item">
                  <div className="c-testimonials-2-item">
                    <div className="c-testimonials-2-message">
                      <p>Создание единой информационной базы наиболее интересных проектов и турпродуктов в сфере туризма</p><br/>
                    </div>
                  </div>
                </div>
                {/*/Sixth item end*/}

                {/*Seventh item*/}
                <div className="carousel-item">
                  <div className="c-testimonials-2-item">
                    <div className="c-testimonials-2-message">
                      <p>Привлечение к участию в конкурсе как можно большего числа участников сферы туризма из как можно большего количества территорий страны</p><br/>
                    </div>
                  </div>
                </div>
                {/*/Seventh item end*/}

                {/*Eighth item*/}
                <div className="carousel-item">
                  <div className="c-testimonials-2-item">
                    <div className="c-testimonials-2-message">
                      <p>Содействие внедрению механизма частно-государственного партнерства в сферу туризма</p><br/>
                    </div>
                  </div>
                </div>
                {/*/Eighth item end*/}

              </div>
              {/*/.Slides*/}
            </div>
            {/*/.Carousel Wrapper*/}
          </div>
          {/* Testimonials End */}
        </div>
      </div>
    </div>
  </div>
);

export default testimonials;
