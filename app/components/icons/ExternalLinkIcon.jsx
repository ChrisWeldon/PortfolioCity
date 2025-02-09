
export default function ExternalLinkIcon(props){

    return (
        <svg className={`${props.className}`} 
            width={`${props.width}`} height={`${props.height}`} 
            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
            fill="none" stroke={`${props.color}`} strokeWidth="1" 
            strokeLinecap="round" strokeLinejoin="miter"
        >
            <polyline points="20 13 20 22 2 22 2 4 11 4"></polyline>
            <polyline points="16 2 22 2 22 8"></polyline>
            <line x1="12" y1="12" x2="21.6" y2="2.4"></line>
        </svg>
    )
}
