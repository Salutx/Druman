import './index.css'

import Container from "../../Container";
import Hero from './Hero/Hero';
import ShapeDivider from '../../Images/svg/ShapeDivider';
import ButtonsMain from '../../Buttons/ButtonsMain';

const Main = () => {
    return (
        <main>
            <Container>
                <div className='hero'>
                    <Hero>
                        Build your future, use <span className='druman-destaque'> Druman. </span>
                    </Hero>

                    <ButtonsMain/>
                </div>
            </Container>
            <ShapeDivider />
        </main>
    )
}

export default Main;