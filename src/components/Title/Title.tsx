import React, { memo, useRef } from 'react'
import styles from './title.module.scss'

type TitleProps = {
  address: {
    street: string
  }
  handleClickTitle: (value: any) => void
}

function Title(address: TitleProps) {
  const h1Ref = useRef<HTMLHeadingElement>(null)

  const clickH1 = () => {
    if (h1Ref.current) {
      h1Ref.current.style.color = 'red'
    }
  }
  return (
    <h1 className={styles.title} ref={h1Ref} onClick={clickH1}>
      TodoList Typescript
    </h1>
  )
}

function equal(prevProps: TitleProps, nextProps: TitleProps) {
  return prevProps.address.street === nextProps.address.street
}

export default memo(Title, equal)
