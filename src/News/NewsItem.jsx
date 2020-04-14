import React from "react";
import styles from "./NewsItem.module.css";
import NewsImage from "./NewsImage";
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const NewsItem = props => {
    return (
         <div className={styles.container}>
              <Link to={`News/NewsDetails/${props.newsName}`}><NewsImage className={styles.newsImage} url={props.url} title={props.title} /></Link>
              <Link to={`News/NewsDetails/${props.newsName}`}><h1 className={styles.newsH1}>{props.head}</h1></Link>
              <p>{props.para}</p>
              <time>{props.time}</time>
         </div>
  );
};

NewsItem.propTypes = {
    className: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    head: PropTypes.string.isRequired,
    para: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    newsName: PropTypes.string.isRequired
};

export default NewsItem;