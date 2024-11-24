import OuterErrorBoundary from '@/components/ErrorBoundaryHooks/ErrorBoundaryP2'
import MiddleErrorBoundary from '@/components/ErrorBoundaryHooks/ErrorBoundaryP1'
import InnerErrorBoundary from '@/components/ErrorBoundaryHooks/ErrorBoundary'
import ComponentThatThrowsError from '@/components/ErrorBoundaryHooks/ComponentThatThrowsError'

function Demo() {
  return (
    <OuterErrorBoundary>
      <MiddleErrorBoundary>
        <InnerErrorBoundary>
          <ComponentThatThrowsError />
        </InnerErrorBoundary>
      </MiddleErrorBoundary>
    </OuterErrorBoundary>
  )
}
export default Demo
