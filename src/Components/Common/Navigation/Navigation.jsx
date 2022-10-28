import React from 'react';
import s from './styles.module.sass'

const Navigation = ({styles}) => {
  styles = styles || '';

  return (
    <div className={[s.navigation, styles].join(' ')}>
      <div className={[s.arrow, s.prev, 'navigation__prev'].join(' ')}>
        <svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
          <path transform="translate(7 18) rotate(-135)"
                d="M1.5,0 C2.27969612,0 2.92044868,0.594888083 2.99313342,1.35553999 L3,1.5 L3,10 L11.5,10 C12.3284271,10 13,10.6715729 13,11.5 C13,12.2796961 12.4051119,12.9204487 11.64446,12.9931334 L11.5,13 L1.5,13 C0.720303883,13 0.0795513218,12.4051119 0.00686657806,11.64446 L0,11.5 L0,1.5 C0,0.671572875 0.671572875,0 1.5,0 Z"></path>
        </svg>
      </div>
      <div className={[s.arrow, 'navigation__next'].join(' ')}>
        <svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
          <path transform="translate(7 18) rotate(-135)"
                d="M1.5,0 C2.27969612,0 2.92044868,0.594888083 2.99313342,1.35553999 L3,1.5 L3,10 L11.5,10 C12.3284271,10 13,10.6715729 13,11.5 C13,12.2796961 12.4051119,12.9204487 11.64446,12.9931334 L11.5,13 L1.5,13 C0.720303883,13 0.0795513218,12.4051119 0.00686657806,11.64446 L0,11.5 L0,1.5 C0,0.671572875 0.671572875,0 1.5,0 Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default Navigation;