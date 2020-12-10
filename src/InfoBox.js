import React from 'react';
import "./InfoBox.css";
import { Card, CardContent, Typography } from '@material-ui/core';

function InfoBox({ title, cases, isRed, active, total, ...props }) {

    const cardClicked = () => {
        props.onClick();
        props.mapReRender();
    }

    return (
        <div className="infoBox">
            <Card
                onClick={cardClicked}
                className={ active ? isRed ? "infoBox infoBox--red" : "infoBox infoBox--green" : "infoBox" }
            >
                <CardContent>
                    <Typography className="infoBox__title" color="textSecondary">{title}</Typography>
                    <h2 className={isRed ? "infoBox__cases" : "infoBox__recovered"}>{cases}</h2>
                    <Typography className="infoBox__total" color="textSecondary">{total} Total</Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default InfoBox
