import { Grid } from "@mui/material";
import ContentLoader from "react-content-loader";

const EventPlaceholder = () => {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <ContentLoader
        speed={2}
        width={400}
        height={400}
        viewBox="0 0 400 400"
        backgroundColor="#effbfb"
        foregroundColor="#ccfff2"
      >
        <rect x="33" y="22" rx="5" ry="5" width="299" height="161" />
        <rect x="35" y="192" rx="0" ry="0" width="292" height="11" />
        <rect x="36" y="215" rx="0" ry="0" width="293" height="12" />
      </ContentLoader>
    </Grid>
  );
};

export default EventPlaceholder;
