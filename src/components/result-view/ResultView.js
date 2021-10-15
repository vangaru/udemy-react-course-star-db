import React from "react";
import ErrorIndicator from "../error-indicator";
import Spinner from "../spinner";

const ResultView = ( { loading, error, view } ) => {
    const hasData = !(loading || error);

    const errorIndicator = error ? <ErrorIndicator /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = hasData ? view : null;

    return (
        <React.Fragment>
            {errorIndicator}
            {spinner}
            {content}
        </React.Fragment>
    );
}

export default ResultView;