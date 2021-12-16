import React from 'react';
import _ from 'lodash'
const PaginationComponent = (props) => {
    const { itemsCount, pageSize } = props
    const pageCount = Math.ceil(itemsCount / pageSize)
    const pages = _.range(1, pageCount + 1)
    if (pages === 1) {
        return (
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    {pages.map(page => {
                        return (
                            <li key={page} className="page-item">
                                <a className="page-link">{page}</a>
                            </li>
                        )
                    })}

                </ul>
            </nav>
        );
    } else {
        return null
    }
}

export default PaginationComponent;