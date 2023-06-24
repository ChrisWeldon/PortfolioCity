

export default function ToggleBG(props){
    const { className, bgEnabled, setBgEnabled} = props

    return (
        <label className={
            `h-6 text-sm space-x-2 flex flex-row p-2 items-center ${className}`
        }>
            <input 
                name="toggle-background"
                type="checkbox"
                value={bgEnabled}
                onChange={()=>setBgEnabled(!bgEnabled)}

                className="h-4 w-4 border-[1px] border-black
                    appearance-none
                    transition-all notebook-input notebook-unfocused 
                    duration-75
                    checked:notebook-focused
            ">
                
            </input>
            <span> Disable Background </span>
        </label>
    )
}
