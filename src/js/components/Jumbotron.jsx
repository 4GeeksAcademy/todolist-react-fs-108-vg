const Jumbotron = () => {
    return (
        <div className="jumbotron">
            <div className="bg-light py-5">
                <div className="container px-3 px-md-5">
                    <h1 className="display-4 text-center text-md-start">A Warm Welcome!</h1>
                    <p className="lead text-center text-md-start">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi alias quia consequatur minima!
                        Nemo maiores in dolores fugiat quas fugit dolore provident tempore beatae ducimus dolor tenetur,
                        consequatur dolorem atque?
                    </p>
                    <div className="d-flex justify-content-center justify-content-md-start">
                        <a className="btn btn-primary btn-lg" href="#" role="button">Call to action!</a>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Jumbotron;
