import React from "react";
import { Title, Wrapper, VideoIconStyle } from './styles';
import { VideoIcon } from "@radix-ui/react-icons";

const MovieListHeader = () => {
    return (
        <Wrapper>
            <VideoIconStyle>
                <VideoIcon />
            </VideoIconStyle>

            <Title>
                MovieSearch
            </Title>
        </Wrapper>
    )
}

export default MovieListHeader;