import React, { useEffect, useRef } from 'react'
import { DragSelectProvider, useDragSelect } from './DragSelectContext'

const SomeOtherComponentsThatNeedsDragSelect = () => {
    const ds = useDragSelect()
    const inputEl = useRef(null)

    // adding a selectable element
    useEffect(() => {
        const element = inputEl.current
        if (!element || !ds) return
        ds.addSelectables(element)
    }, [ds, inputEl])

    // subscribing to a callback
    useEffect(() => {
        const id = ds.subscribe('callback', (e) => {
            // do something
            console.log(e)
        })

        return () => {
            ds.unsubscribe('callback', null, id)
        }
    }, [])

    return (
        <button ref={inputEl} aria-labelledby="Selectable">Selectable</button>
    )
}

const TestColumn = () => (
    // you can add initial settings by passing a settings object
    // <DragSelectProvider settings={{ selectorClass: styles.selector }}>
    <DragSelectProvider >
        <SomeOtherComponentsThatNeedsDragSelect />
    </DragSelectProvider>
)

export default TestColumn;

// import { useSelectionContainer } from '@air/react-drag-to-select'

// const TestColumn = () => {
//     const { DragSelection } = useSelectionContainer();

//     return (
//         <div>
//             <DragSelection />
//             <div>Selectable element</div>
//             <div>Selectable element</div>
//             <div>Selectable element</div>
//             <div>Selectable element</div>
//             <div>Selectable element</div>
//             <div>Selectable element</div>
//         </div>
//     )
// }

// export default TestColumn