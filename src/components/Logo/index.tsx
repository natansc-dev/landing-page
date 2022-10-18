import React from 'react'
import * as S from './styles'
import { LogoProps } from 'types/api'
import { getImageUrl } from 'utils/getImageUrl'

const Logo = ({ data }: LogoProps) => {
  console.log(data.url)
  return (
    <S.LogoWrapper src={getImageUrl(data.url)} alt={data.alternativeText} />
  )
}

export default Logo
