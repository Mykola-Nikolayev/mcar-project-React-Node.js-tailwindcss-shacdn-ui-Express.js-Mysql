interface IconProps {
    width?: number
    height?: number
    strokeWidth?: number
}
  
export const IconMenuBurger = ({ height = 20, width = 20, strokeWidth = 1 }: IconProps) => {
    return (
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width={width}
            height={height}
            stroke='currentColor'
            viewBox="0 0 16 16"
        >
            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} d="M2.75 12.25h10.5m-10.5-4h10.5m-10.5-4h10.5"/>
        </svg>
    )
}