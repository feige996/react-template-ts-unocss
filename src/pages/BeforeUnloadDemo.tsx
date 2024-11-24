import { useRef, useEffect } from 'react'

const BeforeUnloadDemo = () => {
  const shouldPrompt = useRef(true)
  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      console.log('handleBeforeUnload shouldPrompt', shouldPrompt.current)
      if (!shouldPrompt.current) {
        return
      }
      // 设置提示消息
      const message = '确定离开吗？'
      event.returnValue = message // 兼容旧浏览器
      return message
    }

    // 添加事件监听器
    window.addEventListener('beforeunload', handleBeforeUnload)

    // 清理事件监听器
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload)
    }
  }, [])

  return (
    <div>
      <p>
        <button
          onClick={() => {
            shouldPrompt.current = false
            window.location.reload()
          }}
        >
          取消提示
        </button>
      </p>
      <p>
        <button
          onClick={() => {
            shouldPrompt.current = true
            window.location.reload()
          }}
        >
          恢复提示
        </button>
      </p>
    </div>
  )
}

export default BeforeUnloadDemo
