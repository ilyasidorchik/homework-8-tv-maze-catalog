// Реализуйте страницу поиска.

// Используйте метод connect и mapStateToProps, mapDispatchToProps,
// чтобы получить ссылку на поле search вашего стейта
// и экшн searchRequest.

import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { searchRequest } from '../../actions/search';
import { getSeries, getIsLoading, getError } from '../../selectors/search.js';
import ShowPreview from '../ShowPreview';
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

    handleSearch = () => {
        const { searchRequest } = this.props;
        const { inputValue } = this.state;
        
        searchRequest(inputValue);
    };

    render() {
        const { inputValue } = this.state;
        const { series, isLoading, error } = this.props;

        if (isLoading) return <p>Данные загружаются...</p>;
        if (error) return <p>Произошла сетевая ошибка</p>;
        return (
            <div>
                <div className={styles.previewList}>
                    <input className={styles.input + ' t-input'} placeholder="Название сериала" value={inputValue} onChange={this.handleInputChange} />
                    <div className={styles.buttonWrapper}>
                        <button className={styles.button + ' t-search-button'} onClick={this.handleSearch}>Найти</button>
                    </div>
                </div>
                <div className={styles.searchPanel + ' t-search-result'}>
                    {series.map(item => (
                        <ShowPreview preview={item} key={item.id} />
                    ))}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    series: getSeries(state),
    isLoading: getIsLoading(state),
    error: getError(state)
});

const mapDispatchToProps = { searchRequest };

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Search);