// Реализуйте страницу поиска.

// Используйте метод connect и mapStateToProps, mapDispatchToProps,
// чтобы получить ссылку на поле search вашего стейта
// и экшн searchRequest.

import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { searchRequest } from '../../actions/actions';
import styles from './Search.module.css';

class Search extends PureComponent {
    state = {
        inputValue: ''
    };

    handleInputChange = (e) => {
        this.setState({
            inputValue: e.target.value
        });
    };

    handleSubmit = (e) => {
        const { searchRequest } = this.props;
        
        searchRequest();

        this.setState({
            inputValue: ''
        });
    };

    render() {
        const { search, inputValue } = this.state;

        return (
            <div>
                <div className={styles.previewList}>
                    <input className={styles.input + ' t-input'} placeholder="Название сериала" value={inputValue} onChange={this.handleInputChange} />
                    <div className={styles.buttonWrapper}>
                        <button className={styles.button + ' t-search-button'} onClick={this.handleSubmit}>Найти</button>
                    </div>
                </div>
                <div className={styles.searchPanel + ' t-search-result'}>
                    <ShowPreview />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    search: state.search
});

const mapDispatchToProps = { searchRequest };

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Search);