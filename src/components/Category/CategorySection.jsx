import React from "react";
import Stack from "@mui/material/Stack";
import { Card, CardContent, Typography } from "@mui/material";

export const CategorySection = () => {
  return (
    <Stack spacing={1} sx={{ alignItems: "center" }}>
      <Stack direction="row" spacing={5}>
        <Card>
            <CardContent>
                <Typography>MENS</Typography>
            </CardContent>
        </Card>
        <Card>
        <CardContent>
                <Typography>Womens</Typography>
            </CardContent>
        </Card>
      </Stack>

      <Stack direction="row" spacing={2}>
        <Card>
        <CardContent>
                <Typography>Kids</Typography>
            </CardContent>
        </Card>
        <Card>
        <CardContent>
                <Typography>Bags and Shoes</Typography>
            </CardContent>
        </Card>
      </Stack>
    </Stack>
  );
};
