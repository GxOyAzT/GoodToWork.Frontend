import React from 'react'

export type ListInput = {
  rows: React.ReactNode[]
}

const List = (props: ListInput) => {
  return (
    <div style={{ border: '1px black solid', height: '100%', width: '100%', padding: 3 }}>
      { 
        props.rows.map(row => <div style={{ border: '1px black solid', minWidth: 30 }}>{row}</div>) 
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