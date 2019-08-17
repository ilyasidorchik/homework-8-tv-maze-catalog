// Реализуйте компонент превью шоу.
// Он должен показывать название, описание и картинку шоу.

import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import styles from './ShowPreview.module.css';

export default class ShowPreview extends PureComponent {
    render() {
        const { preview } = this.props;
        const { id, name, image, summary } = preview;

        return (
            <div className={styles.container + ' t-preview'}>
                <div>
                    <Link to={'/shows/' + id} className="t-link">{name}</Link>                

                    {image && <img src={image} alt={name} />}
                </div>
                <div dangerouslySetInnerHTML={{ __html: summary }} />
            </div>
        );
    }
}