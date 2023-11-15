export default function Section ({children, TabButton, ...props}){
    return(<section {...props}>
        {children}
        {<TabButton/>}
    </section>)
}