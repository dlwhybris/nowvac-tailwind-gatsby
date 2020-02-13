import React, {Fragment} from "react"
import {Highlight, Snippet} from "react-instantsearch-dom"
import {Link} from "gatsby"

export const PageHit = ({hit}) => (
    <div>
        <Link to={hit.slug}>
            <h4>
                <Highlight attribute="sku" hit={hit} tagName="mark"/>
            </h4>
        </Link>
        <Snippet attribute="sku" hit={hit} tagName="mark"/>
    </div>
)
export const PostHit = ({hit}) => (
    <div>
        <Link to={`/blog` + hit.slug}>
            <h4>
                <Highlight attribute="sku" hit={hit} tagName="mark"/>
            </h4>
        </Link>
        <div>
            <Highlight attribute="date" hit={hit} tagName="mark"/>
            &emsp;
            {hit.tags.map((tag, index) => (
                <Fragment key={tag}>
                    {index > 0 && `, `}
                    {tag}
                </Fragment>
            ))}
        </div>
        <Snippet attribute="excerpt" hit={hit} tagName="mark"/>
    </div>
)
export const ProductHit = ({hit}) => (
    <Link to={hit.slug}>
        <h4>
            <Highlight attribute="sku" hit={hit} tagName="mark"/>
        </h4>
    </Link>
)