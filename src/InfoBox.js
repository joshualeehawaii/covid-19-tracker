import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";

function InfoBox({ title, cases, total }) {
  return (
    <Card ClassName="infoBox">
      <CardContent>
        <Typography color="textPrimary" className="infoBox_title">
          {title}
        </Typography>
        <h3 className="infoBox_cases">{cases}</h3>
        <Typography color="textSecondary" className="infoBox_total">
          {total} Total
        </Typography>
      </CardContent>
    </Card>
  );
}

export default InfoBox;
