
export default function Footer(props){

    return (
        <div className={`
            flex flex-row justify-center items-center
            h-10
            ${props.className}
        `}>
        <div>
        <div className="italic"> Thanks to <a href="https://bgrant.site/" className="underline">Ben Grant</a> for the city GSLB model.</div>
        <div>&copy; 2023 Christopher Evans</div>
        </div>
            
        </div>
    )

}
