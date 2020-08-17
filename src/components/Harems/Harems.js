import React from 'react';
import { connect } from 'react-redux';

import './styled.css';
import { loadHarems } from '../../actions';

const Harems = ({ harems, loadHarems }) => {
    console.log(harems);
    return (
        <span className="harems" onClick={() => loadHarems()}>
            Fetch Harems...
        </span>
    );
};

const mapStateToProps = ({ harems }) => ({
    harems,
});

const mapDispatchToProps = dispatch => ({
    loadHarems: () => dispatch(loadHarems()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Harems);
