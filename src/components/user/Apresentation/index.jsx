import './index.css';
import Container from "../../Container";
import Card from './Card'
import imagePreview from '../../Images/discord.png';
import Graph from './Graph/';
import Name from '../Name.jsx'
import installPreview from '../../Images/download.png'

const Apresentation = () => {
    return (
        <section id="apresentation">
            <Container>
                <div className="imagePreview">
                    <img src={imagePreview} alt="/" />
                </div>

                <div id='graph'>
                    <Graph/>

                    <div className="graph-legend">
                        <h1 className='text-white'>Best framework</h1>
                        <p>Druman is used by over <b>83.3%</b> of developers.</p>
                    </div>
                </div>

                <div id='features'>
                    <h1 className='apresentation-title text-center'>Features</h1>
                    <Card/>
                </div>
            </Container>

            <div id='asks'>

                <Container>

                <div className="asks-group">

                <h1 className='apresentation-title'>Why use?</h1>

                <div className='asks-container'>

                    <div className='asks-icon'>
                        <i className="fas fa-rocket"></i>
                    </div>

                    <div className="asks-container-legend text-white">
                        <h1>Whoa! A rocket.</h1>
                        <p>
                            With <Name /> framework you'll be able to do your developments <span className='asks-destaque'>very quickly!</span> In addition to being simple to use with our documentation.
                        </p>
                    </div>
                </div>

                <hr/>

                <div className='asks-container'>
                    
                    <div className='asks-icon'>
                        <i className="fab fa-discord"></i>
                    </div>

                    <div className="asks-container-legend text-white">
                        <h1>Discord Community</h1>
                        <p>
                            Become part of the official <span className='asks-destaque'><Name /> Community</span>. Make new work partners and clear your doubts with more than 3,785 members.
                        </p>
                    </div>
                </div>

                <hr/>

                <div className='asks-container'>

                    <div className='asks-icon'>
                        <i className="fab fa-github"></i>
                    </div>

                    <div className="asks-container-legend text-white">
                        <h1>Open Source</h1>
                        <p>
                            The <Name /> framework is Open source! Please feel free to <span className="asks-destaque">help us</span> with your experience contributing to the community.
                        </p>
                    </div>
                </div>

                <hr />

                <div className='asks-container'>

                    <div className='asks-icon'>
                        <i className="fas fa-code-branch"></i>
                    </div>

                    <div className="asks-container-legend text-white">
                        <h1>Branched</h1>
                        <p>
                            Created to facilitate your development, using <span className='asks-destaque'>branch</span> and version system that streamline the code <span className='asks-destaque'>maintenance</span> process.
                        </p>
                    </div>
                </div>

                <hr />

                </div>
                </Container>
            </div>

            <div id='installation-guide'>
                <Container>
                
                    <h1 className='apresentation-title text-center'>Installation Guide</h1>
                
                    <div className='installation-row'>
                        <div className='windows-download'>
                            <div className='installation-icon'>
                                <i className="fab fa-windows" aria-hidden="true"></i>
                            </div>

                            <div className="installation-container">

                                <h4 className='text-center'>Select your architeture</h4>

                                <div className='installation-buttons'>
                                    <button type='btn'>Download 64x</button>
                                    <button type='btn'>Download 32x</button>
                                </div>
                            </div>
                        </div>

                        <div className='linux-download'>
                            <div className="installation-icon">
                                <i className="fab fa-linux" aria-hidden="true"></i>
                            </div>

                            <div className="installation-container">
                                <h4 className='text-center'>Commandline Terminal</h4>

                                <p><b>1.</b> Update and upgrade.</p>
                                <div className='commandline'>
                                    <code>$ sudo apt update && sudo apt upgrade</code>
                                </div>

                                <p className='mt-5'><b>2.</b> Install with APT.</p>
                                <div className='commandline'>
                                    <code>$ sudo apt install --install-recommends <Name /> </code>
                                </div>

                                <p className='mt-5'><b>3.</b> Register in IDE.</p>
                                <div className='commandline'>
                                    <code>$ sudo rge --register-deploy /usr/media/<Name /> --install </code>
                                </div>

                                <h4 className='text-center mt-5 mb-5'>Use <Name /> in your Visual Code.</h4>

                            </div>
                        </div>
                    </div>

                </Container>
            </div>
        </section>
    )
}

export default Apresentation;