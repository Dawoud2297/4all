import React, { Component } from 'react'

export default class ErrorBoundary extends Component {
    constructor(props) {
        super(props)
        this.state = { error: null, errorInfo: null }
    }
    componentDidCatch(error, errorInfo) {
        this.setState({
            error: error,
            errorInfo: errorInfo
        })
    }
    render() {
        if (this.state.errorInfo) {
            return (
                <div style={{
                   display : 'flex',
                   alignItems : 'center',
                   justifyContent : 'center',
                   flexDirection : 'column' 
                }}>
                    <h1>Something Went Wrong With JavaScrip</h1>
                    <p>Please Go Back To Home Page</p>
                    <br/>
                    <details>
                    {this.state.errorInfo.componentStack}
                    </details>
                </div>
            )
        }
        return this.props.children;
    }
}
