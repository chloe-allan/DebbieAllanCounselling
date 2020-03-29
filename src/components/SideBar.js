import React from 'react'
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const SideBar = () => {
    return(
        // <Typography component="div" style={{ backgroundColor: "black", height: '100vh' }} />
        <Card elevation={0}>
            <CardMedia
                style = {{ height: 0, paddingTop: '56%'}}
                image="../images/flower.jpg"
                title="Flowers"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    Debbie Allan
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    Some bits and bobs about Debbie and her job
                </Typography>
            </CardContent>
        </Card>
    )
};

export default SideBar;
