import { useEffect } from 'react'
import type { ComponentType } from 'react'

function withLogger<P extends object>(WrappedComponent: ComponentType<P>) {
  function ComponentWithLogger(props: P) {
    const componentName = WrappedComponent.displayName || WrappedComponent.name || 'Component'

    useEffect(() => {
      console.log(`[withLogger] ${componentName} mounted`)

      return () => {
        console.log(`[withLogger] ${componentName} unmounted`)
      }
    }, [componentName])

    return <WrappedComponent {...props} />
  }

  ComponentWithLogger.displayName = `withLogger(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`

  return ComponentWithLogger
}

export default withLogger