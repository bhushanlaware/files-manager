import { Box, Breadcrumbs } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { NavigateNext } from '@material-ui/icons';
import React from 'react';
import { useHistory } from 'react-router-dom';
import Link from '@material-ui/core/Link';


const useStyles = makeStyles((theme) => ({
  link: {
    display: 'flex',
    paddingRight: ' 6px',
    marginTop: '-1px',
    cursor:'pointer',
  },
  icon: {
    marginRight: theme.spacing(0.5),
    width: 20,
    height: 20,
  },
}));

const Breadcrumb = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const renderIcon = (C) => <span className={classes.link}>{C}</span>

  const handleClick = (url) => {
    history.push(url);
  }
  return (<Box mb={2}>
    <Breadcrumbs separator={<NavigateNext fontSize="small" />} aria-label="breadcrumb">
      {props.links && props.links.map(x => <>
        <Link to={x.url}
          className={classes.link}
          color='inherit'
          onClick={(e) => {
            e.preventDefault();
            handleClick(x.url)
          }} >
          {renderIcon(x.icon)}
          {x.title}
        </Link>
      </>
      )}
    </Breadcrumbs>
  </Box>);
}

export default Breadcrumb;