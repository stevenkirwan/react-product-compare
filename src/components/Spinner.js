import React from "react";
import styled from "styled-components";

const AnimationWrapper = styled.div`
    background-color: #446cb3;
    display: flex;
    align-items: center;
    height: 100vh;
    transition: all 0.3s ease;
`;

const Spinner = styled.div`
    width: 40px;
    height: 40px;
    position: relative;
    margin: 100px auto;

    .double-bounce1,
    .double-bounce2 {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background-color: #ffffff;
        opacity: 0.6;
        position: absolute;
        top: 0;
        left: 0;
        -webkit-animation: bounce 2s infinite ease-in-out;
        animation: bounce 2s infinite ease-in-out;
    }

    .double-bounce2 {
        -webkit-animation-delay: -1s;
        animation-delay: -1s;
    }
`;

export default () => (
    <AnimationWrapper>
        <Spinner>
            <div className="double-bounce1" />
            <div className="double-bounce2" />
        </Spinner>
    </AnimationWrapper>
);
