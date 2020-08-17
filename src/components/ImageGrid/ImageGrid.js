import React, { Component } from 'react';
import { connect } from 'react-redux';

import './styles.css';
import { loadImages } from '../../actions';
import STATS from '../Stats';
import Harems from '../Harems';
class ImageGrid extends Component {
    componentDidMount() {
        this.props.loadImages();
    }
    render() {
        const { isLoading, images, err, imageStats } = this.props;
        return (
            <div className="content">
                <section className="grid">
                    {err && <p style={{ color: 'red' }}>{err}</p>}
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className={`item item-${Math.ceil(
                                image.height / image.width,
                            )}`}
                        >
                            <STATS stats={imageStats[image.id]} />
                            <img
                                src={image.urls.small}
                                alt={image.user.username}
                            />
                        </div>
                    ))}
                    {isLoading && <p>loading...</p>}
                    {!isLoading && (
                        <p onClick={() => this.props.loadImages()}>
                            fetch image from api
                        </p>
                    )}
                </section>
                <Harems />
            </div>
        );
    }
}

const mapStateToProps = ({ isLoading, images, err, nextPage, imageStats }) => ({
    isLoading,
    images,
    err,
    nextPage,
    imageStats,
});

const mapDispatchToProps = dispatch => ({
    loadImages: () => dispatch(loadImages()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ImageGrid);
