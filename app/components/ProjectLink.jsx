import ExternalLinkIcon from "@/icons/ExternalLinkIcon"

export default function ProjectLink(props){
   
    return (
        <div className="group flex flex-row align-end spacing-x-2">
            <div className="
                transition-all project-input project-unfocused 
                group-hover:project-hover group-hover:delay-0 group-hover:duration-250
                border-r border-transparent 
                group-hover:border-black
                active:project-focused
                underline
                text-2xl
                w-fit
                pr-2
                ">
                <a href={props.href} >{props.children}
                </a>
            </div>
            <div className="relative grow overflow-x-hidden">
                <a className="
                    invisible
                    md:visible
                    text-base
                    transition-all
                    delay-100
                    underline
                    min-w-max
                    absolute
                    bg-yellow-300
                    bg-opacity-50
                    pl-2
                    bottom-0
                    -left-full
                    group-hover:left-0
                " 
                href={props.href} >
                    <span className="flex flex-row flex-nowrap items-end">
                        {props.href}
                        <ExternalLinkIcon 
                            className={"py-1"}
                            width={24} height={24} color={"#000000"}
                        />
                    </span>
                </a>
            </div>
        </div>
    )
}
