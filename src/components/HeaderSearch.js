import React from "react"
import {
    InstantSearch,
    Index,
    Hits,
    connectStateResults,
} from "react-instantsearch-dom"
import {Root, HitsWrapper} from "./HeaderSearchStyles"
import algoliasearch from "algoliasearch/lite"

import HeaderSearchInput from "./HeaderSearchInput"
import * as hitComps from "./HeaderSearchResult"

const Results = connectStateResults(
    ({searchState: state, searchResults: res, children}) =>
        res && res.nbHits > 0 ? children : `No results for '${state.query}'`
)
const Stats = connectStateResults(
    ({searchResults: res}) =>
        res && res.nbHits > 0 && `${res.nbHits} result${res.nbHits > 1 ? `s` : ``}`
)


export default function HeaderSearch({indices, hitsAsGrid}) {
    const ref = React.createRef()
    const [query, setQuery] = React.useState(``)
    const searchClient = algoliasearch(
        process.env.GATSBY_ALGOLIA_APP_ID,
        process.env.GATSBY_ALGOLIA_SEARCH_KEY
    )

    return (
        <div className="w-full flex items-center">
            <InstantSearch
                searchClient={searchClient}
                indexName={indices[0].name}
                onSearchStateChange={({query}) => setQuery(query)}
                root={{Root, props: {ref}}}>
                <HeaderSearchInput/>
                <HitsWrapper show={query.length > 0} asGrid={hitsAsGrid}>
                    {indices.map(({name, title, hitComp}) => (
                        <Index key={name} indexName={name}>
                            <header>
                                <h3>{title}</h3>
                                <Stats/>
                            </header>
                            <Results>
                                <Hits hitComponent={hitComps[hitComp]}/>
                            </Results>
                        </Index>
                    ))}
                </HitsWrapper>
            </InstantSearch>
        </div>
    )
}
