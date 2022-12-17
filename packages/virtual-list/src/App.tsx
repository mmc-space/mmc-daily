import { useEffect, useRef, useState } from 'react'

function App() {
  const itemHeight = 100
  const [dataList, setDataList] = useState<number[]>([])
  const [showDataList, setShowDataList] = useState<number[]>([])

  // 可显示的列表项数
  const showedCount = useRef(0)
  // 偏移量
  const startOffset = useRef(0)
  // 起始索引
  const startIndex = useRef(0)
  // 结束索引
  const endIndex = useRef(0)

  const containerRef = useRef<HTMLDivElement>(null)

  // 生成假数据
  const getTenListData = () => {
    if (dataList.length >= 200) return []

    return new Array(200).fill({}).map((_, index) => index)
  }

  // 初始化展示的数据条数，结束数据的索引，展示的数据
  useEffect(() => {
    const scrollHeight
      = document.documentElement.clientHeight || document.body.clientHeight
    showedCount.current = Math.ceil(scrollHeight / itemHeight)
    endIndex.current = startIndex.current + showedCount.current
    const data = getTenListData()
    setDataList(data)
    setShowDataList([...data].slice(startIndex.current, endIndex.current))
  }, [])

  // 列表总高度
  const listHeight = dataList.length * itemHeight

  // 偏移量对应的css
  const getTransform = () => {
    return `translate3d(0, ${startOffset.current}px,0)`
  }

  const scrollEvent = () => {
    const scrollTop = containerRef.current?.scrollTop ?? 0
    startIndex.current = Math.ceil(scrollTop / itemHeight)
    endIndex.current = startIndex.current + showedCount.current

    if (endIndex.current > dataList.length)
      setDataList([...dataList].concat(getTenListData()))

    setShowDataList([...dataList].slice(startIndex.current, endIndex.current))
    startOffset.current = scrollTop - (scrollTop % itemHeight)
  }

  return (
    <div
      ref={containerRef}
      onScroll={scrollEvent}
      style={{ overflow: 'scroll', position: 'relative', height: '100vh' }}
    >
      <div
        style={{
          height: `${listHeight}px`,
          position: 'absolute',
          left: 0,
          top: 0,
          right: 0,
          zIndex: -1,
        }}
      ></div>
      <div
        className="virtual-list"
        style={{
          transform: getTransform(),
          textAlign: 'center',
        }}
      >
        {showDataList.map(data => (
          <div
            className="virtual-list-item"
            key={data}
            style={{ height: `${itemHeight}px`, lineHeight: `${itemHeight}px` }}
          >
            {data}
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
