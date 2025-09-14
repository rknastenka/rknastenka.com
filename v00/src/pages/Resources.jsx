import './resources.css';

export default function Resources() {
    return (

        <main>
            <h3> Some of my fvrt youtube channels, videos as well as online resources </h3>

            <div className="bookmark-card">
                <a href="https://www.youtube.com/watch?v=h9Z4oGN89MU" target="_blank">
                    <div className="bookmark-thumbnail">
                        <img src="https://img.youtube.com/vi/h9Z4oGN89MU/maxresdefault.jpg" alt="Video thumbnail"/>
                    </div>
                    <div className="bookmark-content">
                        <h3 className="bookmark-title">How do Graphics Cards Work? Exploring GPU Architecture</h3>
                        <p className="bookmark-description">
                            Graphics Cards can run some of the most incredible video games, but how...
                        </p>
                        <span className="bookmark-url">youtube.com</span>
                    </div>
                </a>
            </div>
        </main>
    );
}