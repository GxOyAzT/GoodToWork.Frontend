import React from 'react'
import './List.css'

export type ListInput = {
  rows: React.ReactNode[]
}

const List = (props: ListInput) => {
  return (
    <div className='List-wrapper'>
      { 
        props.rows.map(row => <div className='List-row'>{row}</div>) 
      }
    </div>
  )
}

// const Row = (props: ListInput) => {
//   return (
//     <div style={{ border: '1px black solid', height: '100%', width: '100%' }}>
//       <div style={{ padding: 3, border: '1px black solid', minWidth: 30 }}>
//         { props.row }
//       </div>
//     </div>
//   )
// }

export default List