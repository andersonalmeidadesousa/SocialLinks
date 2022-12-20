// import ' ./social.css'

export function Social({ children, url}) {
    return (
        <a className="social" href={url} rel="noopener noreferer" target="__blank">
            
            {children}
        </a>

    )


}