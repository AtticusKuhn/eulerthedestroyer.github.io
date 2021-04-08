import React from 'react'
import NextJsLink from 'next/link'

const assetPrefix = process.env.ASSET_PREFIX

const Link = ({ href, mref, ...rest }) => {
  if(mref){
    return <NextJsLink href={mref} {...rest} />
  }
  return <NextJsLink href={`${assetPrefix}${href}`} {...rest} />
}

export default Link 