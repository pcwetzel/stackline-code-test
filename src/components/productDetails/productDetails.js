import React from 'react';
import './product-details.scss';

function ProductDetails(props) {
  const { title, subtitle, image } = props;
  const tags = props.tags || [];

  return (
    <section className='region product-details left-pane'>
      { image && <div className='product-image'>
          <img src={ image } alt={ title } />
        </div>
      }
      { title && <h2>{title}</h2> }
      { subtitle && <div className='description'>{subtitle}</div> }
      { tags.length && <div className='tags'><ul>
        { tags.map(el => <li key={`tag-${el}`}>{el}</li>) }
        </ul></div>
      }
      <nav>
        <ul>
          <li>
            <button className='home'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M506.555,208.064L263.859,30.367c-4.68-3.426-11.038-3.426-15.716,0L5.445,208.064 c-5.928,4.341-7.216,12.665-2.875,18.593s12.666,7.214,18.593,2.875L256,57.588l234.837,171.943c2.368,1.735,5.12,2.57,7.848,2.57 c4.096,0,8.138-1.885,10.744-5.445C513.771,220.729,512.483,212.405,506.555,208.064z"/>
                <path d="M442.246,232.543c-7.346,0-13.303,5.956-13.303,13.303v211.749H322.521V342.009c0-36.68-29.842-66.52-66.52-66.52 s-66.52,29.842-66.52,66.52v115.587H83.058V245.847c0-7.347-5.957-13.303-13.303-13.303s-13.303,5.956-13.303,13.303v225.053 c0,7.347,5.957,13.303,13.303,13.303h133.029c6.996,0,12.721-5.405,13.251-12.267c0.032-0.311,0.052-0.651,0.052-1.036v-128.89 c0-22.009,17.905-39.914,39.914-39.914s39.914,17.906,39.914,39.914v128.89c0,0.383,0.02,0.717,0.052,1.024 c0.524,6.867,6.251,12.279,13.251,12.279h133.029c7.347,0,13.303-5.956,13.303-13.303V245.847 C455.549,238.499,449.593,232.543,442.246,232.543z"/>
              </svg>
              <span>Overview</span>
            </button>
          </li>
          <li>
            <button className='sales active'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 192">
                <path d="M 16,171.88938 V 0.94915254 H 0 V 181.94469 A 8,10.055308 0 0 0 8,192 h 184 v -20.11062 z" />
                <path d="m 191.70763,119.08051 a 8,8 0 0 0 -8,-8 h -24 a 8,8 0 0 0 -8,8 v 56 h 40 z" />
                <path d="m 74.305085,84.512712 a 8,8 0 0 0 -8,-8 h -24 a 8,8 0 0 0 -8,8 v 87.999998 h 40 z" />
                <path d="m 133.4322,52.639831 a 8,8 0 0 0 -8,-8 h -24 a 8,8 0 0 0 -8,8 V 172.63983 h 40 z" />
              </svg>

              <span>Sales</span>
            </button>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default ProductDetails;
