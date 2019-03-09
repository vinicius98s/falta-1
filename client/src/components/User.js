import React from 'react';
import styled from 'styled-components';

const StyledUser = styled.div`
    background: white;
    border-radius: 10px;
    position: relative;

    ::before {
        content: '';
        width: 90%;
        height: 100px;
        border-radius: 10px;
        background: var(--blue);
        bottom: -10px;
        position: absolute;
        opacity: 0.3;
        z-index: -1;
    }

    .user-data {
        margin-left: 20px;
        color: var(--blue);
    }

    img {
        float: left;
        border-radius: 50%;
    }
`

const User = (props) => {
    return (
        <StyledUser>
            <img src={props.user.picture.large} alt="" />
            <div className="user-data">
                <h2>{`${props.user.name.first.replace(/^\w/, c => c.toUpperCase())} ${props.user.name.last.replace(/^\w/, c => c.toUpperCase())}`}</h2>
                <p>{props.user.email}</p>
            </div>
        </StyledUser>
    )
}

export default User