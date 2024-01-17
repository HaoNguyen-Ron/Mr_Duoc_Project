import React from 'react'
// import { debug, log } from '../../constant'

export interface ExtraInfoType {
  debug: Boolean
  log: (value: any) => void
}

//----------- common usage

// export default function connect<T>(Component: React.ComponentType<T & ExtraInfoType>) {
//   return function (props: Omit<T, keyof ExtraInfoType>) {
//     return <Component {...(props as T)} debug={debug} log={log} />
//   }
// }

//----------- injection

export default function connect(injectedProps: ExtraInfoType) {
  return function <T>(Component: React.ComponentType<T & ExtraInfoType>) {
    return function (props: Omit<T, keyof ExtraInfoType>) {
      return <Component {...(props as T)} {...injectedProps} />
    }
  }
}
