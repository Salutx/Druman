import '../index.css'

const Hero = ({children}) => {
    return (
        <h1 className='display-7 text-center'>
            {children}
        </h1>
    )
} 

export default Hero;