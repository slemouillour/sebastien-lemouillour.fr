import React from "react";

import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import MainTemplate from "../../Templates/Main";

const ThemePage: React.FunctionComponent = () => {
  return (
    <MainTemplate>
      <Container maxWidth="lg">
        <Typography variant="h1">Responsive h1</Typography>
        <Typography variant="h2">Responsive h2</Typography>
        <Typography variant="h3">Responsive h3</Typography>
        <Typography variant="h4">Responsive h4</Typography>
        <Typography variant="h5">Responsive h5</Typography>
        <Typography variant="h6">Responsive h6</Typography>
        <Typography variant="subtitle1">Subtitle 1</Typography>
        <Typography variant="subtitle2">Subtitle 2</Typography>
        <Typography variant="body1">Body 1</Typography>
        <Typography variant="body2">Body 2</Typography>
        <Typography variant="button">button</Typography>
        <br />
        <Typography variant="caption">caption</Typography>
        <br />
        <Typography variant="overline">overline</Typography>
        <br />
      </Container>
    </MainTemplate>
  );
};

export default ThemePage;
