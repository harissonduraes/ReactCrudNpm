import styled from '@emotion/styled'

export const Card = styled.div(() => {
    return {
        //display: 'flex',
        //color: 'red'
        border: '2px, solid',
        margin: '10px',
        padding: '10px'
    }
})

export const DisplayFlex = styled.div((
    { props }
) => {
    console.log(props);
    return {
        display: 'flex',
        flexDirection: `${props}`,
        // color: 'blue'
    }
})

export const Body = styled.div(() => {
    return {
        margin: '200px'
    }
})