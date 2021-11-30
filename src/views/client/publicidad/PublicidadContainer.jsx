import React, { useCallback, useEffect, useState } from 'react'
import { API } from '../../../api'
import PublicidadView from './PublicidadView'

export default function PublicidadContainer() {
  const [publicidades, setPublicidades] = useState([])
  const optener = useCallback(async () => {
    API.GET('/publicidad').then(({ data }) => {
      if (data.ok) {
        setPublicidades(data.list)
      }
    })
  }, [setPublicidades])

  useEffect(() => {
    optener()
  }, [optener])
  return <PublicidadView publicidades={publicidades} />
}
