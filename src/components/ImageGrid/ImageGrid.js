import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadImages } from '../../actions';
import './styles.css';

class ImageGrid extends Component {
    componentDidMount() {
        this.props.loadImages();
    }
    render() {
        const { isLoading, images, nextPage } = this.props;
        console.log('state :', images, nextPage);
        return (
            <div className="content">
                <section className="grid">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className={`item item-${Math.ceil(
                                image.height / image.width,
                            )}`}
                        >
                            <img
                                src={image.urls.small}
                                alt={image.user.username}
                            />
                        </div>
                    ))}
                    {isLoading && <p>loading...</p>}
                    <p onClick={() => this.props.loadImages()}>
                        fetch image from api
                    </p>
                </section>
            </div>
        );
    }
}

const mapStateToProps = ({ isLoading, images, err, nextPage }) => ({
    isLoading,
    images,
    err,
    nextPage,
});

const mapDispatchToProps = dispatch => ({
    loadImages: () => dispatch(loadImages()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ImageGrid);
