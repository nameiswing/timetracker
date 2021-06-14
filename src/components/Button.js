import styled from 'styled-components'
import PropTypes from 'prop-types'

const Button = ({ 
    bordered, 
    bgColor, 
    boxShadow,
    disabled,
    clickHandler,
    color, 
    tagName, 
    size,
    borderRadius,
    width
}) => {
    return (    
        <Btn
            bordered = { bordered }
            bgColor = { bgColor ?? "#2196F3"}
            boxShadow = { boxShadow }
            color = { color  ?? "#fdfdfd"}
            disabled ={disabled}
            onClick = { clickHandler }
            data-color = { bordered ? !bgColor ? "#2196F3" : bgColor : color}
            size = { size ?? "small"} //medium and large
            borderRadius = { borderRadius }
            width = { width }
        >
            { tagName ?? "Button"}
        </Btn>
    )
}

export default Button

Button.propTypes = {
    bordered: PropTypes.bool,
    onClick: PropTypes.func,
}

const Btn = styled.button `
    align-items: center;
    background-color: ${ props => props.bgColor };
    border: none;
    border-radius: ${ props => props.borderRadius ?? ".25rem" };
    box-shadow: ${props => props.boxShadow ? "0 2px 6px rgba(0,0,0,0.1)" : "none"};
    cursor: ${props => props.disabled ? "not-allowed" : "pointer"};
    color: ${ props => props.color ?? "#fdfdfd"};
    font-family: var(--font-main);
    justify-content: center;
    letter-spacing: 1.5px;
    margin: .25rem .5rem;
    outline: none;
    overflow: hidden;
    padding: 0 .75rem;
    position: relative;
    text-transform: uppercase;
    /* transition: all .2s; */
    width: 8rem;
    white-space: nowrap;

    ${ props => {
        if(props.bordered) {
            return `
                background-color: transparent !important;
                color: ${ props.bgColor } !important;
                font-weight: 500 !important;

                &:after {
                    border: .125rem solid ${ props.bgColor } !important;
                    border-radius: ${ props.borderRadius ?? ".25rem" };
                    content: "";
                    height: calc(100% - 4px);
                    position: absolute;
                    top: 0; left: 0;
                    width: calc(100% - 4px);
                }
            `
        }
    }}

    ${ props => {
        switch (props.size) {
            case "small":
                return `
                    height: 2.25rem;
                `;
            case "medium":
                return `
                    height: 2.75rem;
                    font-size: 1.0625rem;
                    font-weight: 400 !important;
                    padding: 0 1.375rem !important;         
                `;
            case "large":
                return `
                    height: 3.25rem;
                    font-size: 1.25rem;
                    font-weight: 400 !important;
                    padding: 0 2rem !important;
                `;
            default: return ``;
        }
    }}

    &:hover {
        filter: brightness(.92)
    }
    &:active {
        filter: brightness(.85)
    }
`