import styled from '@emotion/styled'

export const Card = styled.div((
    // props
) => {
    return {
        // display: `${props}`,
        //color: 'red'
        border: '2px, solid',
        margin: '10px',
        padding: '10px',
        // justifyContent: 'flex-end'
    }
})

export const DisplayFlex = styled.div((
    props
) => {

    return {
        display: 'flex',
        flexDirection: `${props.flexDirection}`,
        justifyContent: 'flex-end',
        // color: 'blue'

    }
})

export const Body = styled.div(() => {
    return {
        margin: '200px'
    }
})