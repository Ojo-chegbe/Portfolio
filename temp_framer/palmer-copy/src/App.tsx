import './framer-core/styles.css'
import { Component } from 'react'
import { FramerGroup } from './framer-core/context'
import Hero from './framer/Hero'

class ErrorBoundary extends Component<{name: string, children: React.ReactNode}, {error: string | null}> {
  state = { error: null as string | null }
  static getDerivedStateFromError(e: Error) { return { error: e.message } }
  render() {
    if (this.state.error) return (
      <div style={{ padding: 16, margin: 8, border: '1px solid rgba(255,0,0,0.2)', borderRadius: 8, fontSize: 12, color: '#999' }}>
        <strong>{this.props.name}</strong>: {this.state.error}
      </div>
    )
    return this.props.children
  }
}

export default function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12, background: 'rgb(255, 255, 255)', minHeight: '100vh' }}>
      <ErrorBoundary name="Hero">
        <Hero.Responsive
          subtitle="Set up the component by adding background and bouncer elements to the component properties."
          title="Screen Saver"
        />
      </ErrorBoundary>
    </div>
  )
}
