import React, { Component } from 'react'

interface Props {
  children?: React.ReactNode
}

interface State {
  hasError: boolean
}

export default class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  }

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true }
  }

  public componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.log('««««« error, erroInfo »»»»»', error, errorInfo)
  }

  public render() {
    if (this.state.hasError) {
      return <h1>Something when wrong.</h1>
    }
    return this.props.children
  }
}
