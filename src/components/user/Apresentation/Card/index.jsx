import './index.css';

const Card = () => {
    return (
        <div className="card-row">
            <div className='card'>
                <div className="card-body">
                    <i className="card-icon fab fa-bootstrap"></i>
                    <h3 className='card-title mt-4 mb-3'>Bootstrap</h3>
                    <p className='card-text'>
                        Used to give a huge variety of <b>responsive</b> and <b>minimalist</b> components.
                    </p>

                </div>

                <div className="card-viewmore">
                    <a href="/">View more
                        <i className="fa fa-chevron-right" aria-hidden="true"></i>
                    </a>
                </div>
            </div>

            <div className='card'>
                <div className="card-body">
                    <i className="card-icon fab fa-react"></i>
                    <h3 className='card-title mt-4 mb-3'>ReactJS</h3>
                    <p className='card-text'>
                        Used for <b>modular</b> components, <b>clean code</b> along with Bootstrap.
                    </p>
                </div>

                <div className="card-viewmore">
                    <a href="/">View more
                        <i className="fa fa-chevron-right" aria-hidden="true"></i>
                    </a>
                </div>
            </div>

            <div className='card'>
                <div className="card-body">
                    <i className="card-icon fab fa-ubuntu"></i>
                    <h3 className='card-title mt-4 mb-3'>Ubuntu OS</h3>
                    <p className='card-text'>
                        Used to <b>save</b> information with Ubuntu operating system, <b>fast and simple</b>.
                    </p>
                </div>

                <div className="card-viewmore">
                    <a href="/">View more
                        <i className="fa fa-chevron-right" aria-hidden="true"></i>
                    </a>
                </div>
            </div>

            <div className='card'>
                <div className="card-body">
                    <i className="card-icon fab fa-fort-awesome"></i>
                    <h3 className='card-title mt-4 mb-3'>Font Awesome</h3>
                    <p className='card-text'>
                        Make your applications look more <b>modern</b> using icons! With Font Awesome you can.
                    </p>
                </div>

                <div className="card-viewmore">
                    <a href="/">View more
                        <i className="fa fa-chevron-right" aria-hidden="true"></i>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Card;