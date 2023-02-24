import { Stack } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { VideoCard, ChannelCard } from "./";

const Videos = ({ videos }) => {
  console.log(videos);
  return (
    <Stack direction={"row"} flexWrap="wrap" justifyContent={"start"} gap={2}>
      {videos.map((item, index) => (
        <Box key={index}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channel={item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
