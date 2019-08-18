// Реализуйте страницу шоу.

// Используйте метод connect и mapStateToProps, mapDispatchToProps,
// чтобы получить ссылку на поле show вашего стейта
// и экшн showRequest.

// В методе componentDidMount вам нужно будет диспатчить showRequest action

import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { showRequest } from '../../actions/shows';
import styles from './ShowPage.module.css';
import { getShow, getIsLoading, getError } from '../../selectors/shows';

class ShowPage extends PureComponent {
    componentDidMount() {
        const { showRequest, match: { params: { id } } } = this.props;
        showRequest(id);
    }

    render() {
        const { show, isLoading, error } = this.props;
        const { name, image, summary, actors } = show;

        if (isLoading) return <p>Данные загружаются...</p>;
        if (error) return <div>Произошла сетевая ошибка</div>;
        return (
            <div>
                <p>{name}</p>
                {image && <img src={image} alt={name} />}
                <div dangerouslySetInnerHTML={{ __html: summary }} />

                <div className={styles.cast}>
                    {actors && 
                        actors.map(({ characterId, personId, name, image }) => (
                            <div className="t-person" key={characterId + '_' + personId}>
                                <p>{name}</p>
                                {image && <img src={image} alt={name} />}
                            </div>
                        ))
                    }
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    show: getShow(state),
    isLoading: getIsLoading(state),
    error: getError(state)
});

const mapDispatchToProps = { showRequest };

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ShowPage);