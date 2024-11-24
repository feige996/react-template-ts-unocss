import OuterErrorBoundary from '@/components/ErrorBoundaryClass/ErrorBoundaryP2'
import MiddleErrorBoundary from '@/components/ErrorBoundaryClass/ErrorBoundaryP1'
import InnerErrorBoundary from '@/components/ErrorBoundaryClass/ErrorBoundary'
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
