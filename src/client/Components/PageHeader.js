import { Box, Typography } from '@material-ui/core';
import React from 'react';
import Breadcrumb from './Breadcrumbs';
const PageHeader = ({ title, icon, links }) => {
    return (<Box p={2}>
        <Breadcrumb links={links}></Breadcrumb>
        <Typography variant='h4'>{icon} {title}</Typography>
    </Box>);
}

export default PageHeader;