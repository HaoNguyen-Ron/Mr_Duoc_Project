import React, { memo } from 'react'
import styles from './title.module.scss'

type TitleProps = {
  address: {
    street: string
  }
  handleClickTitle: (value: any) => void
}

function Title(address: TitleProps) {
  return <h1 className={styles.title}>TodoList Typescript</h1>
}

function equal(prevProps: TitleProps, nextProps: TitleProps) {
  return prevProps.address.street === nextProps.address.street
}

export default memo(Title, equal)
