import React from "react";

type StateType = {
    hasError: boolean
}

class ErrorHandler extends React.Component<{}, StateType> {

    constructor(props: {}) {
        super(props);

        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        if (error) {
            this.setState((state) => {
                return {
                    hasError: !state.hasError
                }
            })
        }
    }

    render() {
        let children = this.props.children;
        let {hasError} = this.state;
        return hasError ? <div>Ошибка</div> : children
    }
}

export default ErrorHandler;