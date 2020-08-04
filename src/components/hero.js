import React, { useEffect, useState } from 'react';

import Img from 'gatsby-image';
import styles from './hero.module.css';

export default ({ data }) => {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    console.log('test');
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  return (
    <div className={styles.hero}>
      <Img className={styles.heroImage} alt={data.name} fluid={data.heroImage.fluid} />
      <div className={styles.heroDetails}>
        <h3 className={styles.heroHeadline} onClick={() => setCount(count + 1)}>
          {data.name} 2
        </h3>
        <p className={styles.heroTitle}>{data.title}</p>
        <p>{data.shortBio.shortBio}</p>
      </div>
    </div>
  );
};
