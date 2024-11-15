import { Dispatch, SetStateAction, useState } from 'react'
import { ReactSortable as Sortable, SortableEvent } from 'react-sortablejs'

interface Material {
  id: number
  name: string
}

interface ItemListProps {
  items: Material[]
  setItems: Dispatch<SetStateAction<Material[]>>
  onEnd?: (event: SortableEvent) => void
}

const ItemList: React.FC<ItemListProps> = ({ items, setItems, onEnd }) => (
  <Sortable
    list={items}
    setList={(newList: Material[]) => setItems(newList)}
    group='shared'
    onEnd={onEnd}
    tag='ul'
    style={{ listStyleType: 'none', padding: 0 }}
  >
    {items.map((item) => (
      <li
        key={item.id}
        style={{
          padding: '5px',
          border: '1px solid #ccc',
          marginBottom: '5px',
        }}
      >
        {item.name}
      </li>
    ))}
  </Sortable>
)

const App = () => {
  const [materials, setMaterials] = useState<Material[]>([
    { id: 1, name: '物料1' },
    { id: 2, name: '物料2' },
    { id: 3, name: '物料3' },
  ])
  const [displayItems, setDisplayItems] = useState<Material[]>([
    { id: 100, name: '物料100' },
    { id: 200, name: '物料200' },
    { id: 300, name: '物料300' },
  ])

  const handleEnd = (event: SortableEvent) => {
    const { oldIndex, newIndex } = event
    const putSortable = event.to !== event.from
    console.log('event: ', event)
    if (!oldIndex || !newIndex) {
      return
    }
    if (putSortable) {
      // 从物料区拖到展示区
      setDisplayItems([...displayItems, materials[oldIndex]])
    } else {
      // 在展示区内拖动
      const newDisplayItems = [...displayItems]
      const [removed] = newDisplayItems.splice(oldIndex, 1)
      newDisplayItems.splice(newIndex, 0, removed)
      setDisplayItems(newDisplayItems)
    }
  }

  return (
    <div style={{ display: 'flex', gap: '20px' }}>
      <div>
        <h3>物料区</h3>
        <ItemList
          items={materials}
          setItems={setMaterials}
          onEnd={() => {}}
        />{' '}
        {/* 物料区不需要 onEnd 回调 */}
      </div>
      <div>
        <h3>展示区</h3>
        <ItemList
          items={displayItems}
          setItems={setDisplayItems}
          onEnd={handleEnd}
        />
      </div>
    </div>
  )
}

export default App
