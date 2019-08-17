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
        const { showRequest, match: { params } } = this.props;
        showRequest(params.id);
    }

    render() {
        const { show, isLoading, error } = this.props;
        const { name, image, summary, persons } = show;

        if (isLoading) return <p>Данные загружаются...</p>;
        if (error) return <div>Произошла сетевая ошибка</div>;
        return (
            <div>
                <p>{name}</p>
                {image && <img src={image} alt={name} />}
                <div>
                    <p dangerouslySetInnerHTML={{ __html: summary }} />
                </div>
                {persons.length > 0
                && <div className={styles.cast}>
                    {persons.map((person) => (
                        <div class="t-person">
                            <p>{person.name}</p>
                            {person.image && <img src={person.image} alt={person.name} />}
                        </div>
                    ))}
                </div>}
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